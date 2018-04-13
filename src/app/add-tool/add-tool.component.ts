import { Component, OnInit } from '@angular/core';
import { Tool } from '../models/tool.models';
import {TechnicalInformation } from '../models/technical-information.models';
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
    this.tool.technicalInformation = ELEMENT_DATA;
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

const ELEMENT_DATA: TechnicalInformation[] = [
  {id: 6, systems: 'Carbon', version: 12.0107, description: 'C', integrationLms: "" , state:"Activo" , },
  {id: 7, systems: 'Nitrogen', version: 14.0067, description: 'N', integrationLms: "" , state:"Activo" },
  {id: 8, systems: 'Oxygen', version: 15.9994, description: 'O', integrationLms: "" , state:"Activo" },
  {id: 9, systems: 'Fluorine', version: 18.9984, description: 'F', integrationLms: "" , state:"Activo" },
  {id: 10, systems: 'Neon', version: 20.1797, description: 'Ne', integrationLms: "" , state:"Activo" },
  {id: 11, systems: 'Sodium', version: 22.9897, description: 'Na', integrationLms: "" , state:"Activo" },
  {id: 12, systems: 'Magnesium', version: 24.305, description: 'Mg', integrationLms: "" , state:"Activo" },
  {id: 13, systems: 'Aluminum', version: 26.9815, description: 'Al', integrationLms: "probando informacion de visualizacion" , state:"Activo" },
  {id: 14, systems: 'Silicon', version: 28.0855, description: 'Si', integrationLms: "probando informacion de visualizacion" , state:"Activo" },
  {id: 15, systems: 'Phosphorus', version: 30.9738, description: 'P', integrationLms: "probando informacion de visualizacion" , state:"Activo" },
  {id: 16, systems: 'Sulfur', version: 32.065, description: 'S', integrationLms: "probando informacion de visualizacion" , state:"Activo" },
  {id: 17, systems: 'Chlorine', version: 35.453, description: 'Cl', integrationLms: "probando informacion de visualizacion" , state:"Activo" },
  {id: 18, systems: 'Argon', version: 39.948, description: 'Ar', integrationLms: "probando informacion de visualizacion" , state:"Activo" },
  {id: 19, systems: 'Potassium', version: 39.0983, description: 'K', integrationLms: "probando informacion de visualizacion " , state:"Activo"  },
  {id: 20, systems: 'Calcium', version: 40.078, description: 'Ca', integrationLms: "probando informacion de visualizacion " , state:"Activo" },
];
