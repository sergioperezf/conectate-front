import { Component, OnInit } from '@angular/core';
import { Tool } from '../models/tool.models';
import {TechnicalInformation } from '../models/technical-information.models';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent implements OnInit {

  displayedColumns = ['id', 'systems', 'version', 'description', 'integrationLms'];
  public tool : Tool;

  constructor() {
    this.tool = new Tool();
    this.tool.technicalInformation = ELEMENT_DATA;
  }

  ngOnInit() {
  }

}

const ELEMENT_DATA: TechnicalInformation[] = [
  {id: 1, systems: 'Hydrogen', version: 1.0079, description: 'H', integrationLms: ""},
  {id: 2, systems: 'Helium', version: 4.0026, description: 'He', integrationLms: "" },
  {id: 3, systems: 'Lithium', version: 6.941, description: 'Li', integrationLms: "" },
  {id: 4, systems: 'Beryllium', version: 9.0122, description: 'Be', integrationLms: "" },
  {id: 5, systems: 'Boron', version: 10.811, description: 'B', integrationLms: "" },
  {id: 6, systems: 'Carbon', version: 12.0107, description: 'C', integrationLms: "" },
  {id: 7, systems: 'Nitrogen', version: 14.0067, description: 'N', integrationLms: "" },
  {id: 8, systems: 'Oxygen', version: 15.9994, description: 'O', integrationLms: "" },
  {id: 9, systems: 'Fluorine', version: 18.9984, description: 'F', integrationLms: "" },
  {id: 10, systems: 'Neon', version: 20.1797, description: 'Ne', integrationLms: "" },
  {id: 11, systems: 'Sodium', version: 22.9897, description: 'Na', integrationLms: "" },
  {id: 12, systems: 'Magnesium', version: 24.305, description: 'Mg', integrationLms: "" },
  {id: 13, systems: 'Aluminum', version: 26.9815, description: 'Al', integrationLms: "probando informacion de visualizacion" },
  {id: 14, systems: 'Silicon', version: 28.0855, description: 'Si', integrationLms: "probando informacion de visualizacion" },
  {id: 15, systems: 'Phosphorus', version: 30.9738, description: 'P', integrationLms: "probando informacion de visualizacion" },
  {id: 16, systems: 'Sulfur', version: 32.065, description: 'S', integrationLms: "probando informacion de visualizacion" },
  {id: 17, systems: 'Chlorine', version: 35.453, description: 'Cl', integrationLms: "probando informacion de visualizacion" },
  {id: 18, systems: 'Argon', version: 39.948, description: 'Ar', integrationLms: "probando informacion de visualizacion" },
  {id: 19, systems: 'Potassium', version: 39.0983, description: 'K', integrationLms: "probando informacion de visualizacion " },
  {id: 20, systems: 'Calcium', version: 40.078, description: 'Ca', integrationLms: "probando informacion de visualizacion " },
];
