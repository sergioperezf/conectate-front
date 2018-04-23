import { Component, OnInit } from '@angular/core';
import { Tool } from '../models/tool.models';
import { OperativeSystems } from '../models/operative-systems.models';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ToolService } from '../services/tool.service';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-tool',
  providers : [ToolService],
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent implements OnInit {
  
  public tool : Tool;
  private title: string;
  private systems : OperativeSystems[] = [];
  private systemSel = new FormControl();

  configsnackBar = new MatSnackBarConfig();  

  constructor(private toolService:ToolService, 
    public snackBar: MatSnackBar) {
    this.tool = new Tool();
    this.tool.systems = ELEMENT_DATA;
    this.title = "Agregar herramienta";
    this.systems = ELEMENT_DATA;
  }

  onSubmit(f: NgForm){     
    
    if (f.invalid){      
      this.snackBar.open("Por favor ingrese los datos requeridos. ", "Validación", this.configsnackBar)
      return;
    }
        
    this.toolService.add(this.tool).subscribe(
      result =>{
        this.snackBar.open("Datos guardados correctamente. ", "Hecho", this.configsnackBar)
        this.tool = new Tool();        
      }, 
      error => {
        this.snackBar.open("Error al guardar datos de la herramienta", "Error", this.configsnackBar)
        console.log(<any>error);
      }
      
    );
  }


  ngOnInit() {
    this.configsnackBar.verticalPosition = 'bottom';
    this.configsnackBar.horizontalPosition = 'center';
    this.configsnackBar.duration = 7000;
  }

}

const ELEMENT_DATA: OperativeSystems[] = [
  {id: 6, name: 'Windows' },
  {id: 7, name: 'Mac OS' },
  {id: 8, name: 'Linux' }
];
