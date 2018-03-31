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
  public  tutorial:  Tutorial;


  constructor(private ruta:ActivatedRoute, private tutorialService:TutorialService) {
      this.tutorial =  new Tutorial();
   }


  onSubmit(f: NgForm){    
    console.log(this.tutorial);
    this.tutorial.tool =  this.IdHerramienta;

    this.tutorialService.addTutorial(this.tutorial).subscribe(
      result =>{
        console.log(<any>result);
      }, 
      error => {
        console.log(<any>error);
      }
      
    );
  }

  getTutoriales (){
    this.tutorialService.getTutorial(this.IdHerramienta).subscribe(
      result => {
          this.TutorialList = result;
          console.log(this.TutorialList)
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
