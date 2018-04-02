import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'
import {Tutorial} from '../models/tutorial.models'
import { TutorialService } from '../services/tutorial.service';
import { NgForm } from '@angular/forms';
import { error } from 'util';

@Component({
  selector: 'app-tutorial',
  providers : [TutorialService],
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  IdHerramienta: number;
  public TutorialList : Tutorial[];
  public tutorial:  Tutorial;
  public agregaTutorial: boolean = false; 


  constructor(private ruta:ActivatedRoute, private tutorialService:TutorialService) {
      this.tutorial =  new Tutorial();
   }


  onSubmit(f: NgForm){     
    
    if (f.invalid){
      alert("Por favor ingrese los datos requeridos")
      return;
    }
    
    this.tutorial.tool =  this.IdHerramienta;
    this.tutorialService.addTutorial(this.tutorial).subscribe(
      result =>{
        alert("Datos guardados correctamente");
        this.tutorial = new Tutorial();
        this.getTutoriales();
        this.agregaTutorial =false;
      }, 
      error => {
        alert("Error al guardar los datos.")
        console.log(<any>error);
      }
      
    );
  }

  getTutoriales (){
    this.tutorialService.getTutorial(this.IdHerramienta).subscribe(
      result => {
          this.TutorialList = result;              
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
    this.ruta.params.subscribe( parametro=> {
      this.IdHerramienta=parametro['id'];      
    })    
    this.getTutoriales();
  }

}
