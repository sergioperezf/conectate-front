import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'
import { Tutorial} from '../models/tutorial.models'
import { TutorialService } from '../services/tutorial.service';
import { NgForm } from '@angular/forms';
import { error } from 'util';
import { MatSnackBar} from '@angular/material';

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


  constructor(private ruta:ActivatedRoute, private tutorialService:TutorialService, 
    public snackBar: MatSnackBar) {
      this.tutorial =  new Tutorial();
   }


  onSubmit(f: NgForm){     
    
    if (f.invalid){      
      this.snackBar.open("Por favor ingrese los datos requeridos. ", "Validación", {
        duration : 5000
      })
      return;
    }
    
    this.tutorial.toolId =  this.IdHerramienta;
    this.tutorialService.addTutorial(this.tutorial).subscribe(
      result =>{
        this.snackBar.open("Datos guardados correctamente. ", "Hecho", {
          duration : 5000
        })
        this.tutorial = new Tutorial();
        this.getTutoriales();
        this.agregaTutorial =false;
      }, 
      error => {
        this.snackBar.open("Error al guardar datos del tutorial", "Error", {
           duration :5000
        })
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
