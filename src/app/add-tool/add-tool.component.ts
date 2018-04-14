import { Component, OnInit } from '@angular/core';
import { Tool } from '../models/tool.models';
import {OperativeSystems } from '../models/operative-systems.models';
import {MatSnackBar} from '@angular/material';
import {ToolService} from '../services/tool.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-tool',
  providers : [ToolService],
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent implements OnInit {

  displayedColumns = ['id', 'systems', 'version', 'description', 'integrationLms'];
  public tool : Tool;
  private title: string;

  constructor(private toolService:ToolService, 
    public snackBar: MatSnackBar) {
    this.tool = new Tool();
    this.tool.systems = ELEMENT_DATA;
    this.title = "Agregar herramienta";
  }

  onSubmit(f: NgForm){     
    
    if (f.invalid){      
      this.snackBar.open("Por favor ingrese los datos requeridos. ", "Validación", {
        duration : 5000
      })
      return;
    }
    
    
    this.toolService.add(this.tool).subscribe(
      result =>{
        this.snackBar.open("Datos guardados correctamente. ", "Hecho", {
          duration : 5000
        })
        this.tool = new Tool();        
      }, 
      error => {
        this.snackBar.open("Error al guardar datos del tutorial", "Error", {
           duration :5000
        })
        console.log(<any>error);
      }
      
    );
  }


  ngOnInit() {
  }

}

const ELEMENT_DATA: OperativeSystems[] = [
  {id: 6, name: 'Carbon' },
  {id: 7, name: 'Nitrogen' },
  {id: 8, name: 'Oxygen' },
  {id: 9, name: 'Fluorine' }  
];
