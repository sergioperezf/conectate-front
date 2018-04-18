import { Component, OnInit } from '@angular/core';
import { Tutorial} from '../models/tutorial.models'
import { TutorialService } from '../services/tutorial.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddTutorialComponent } from '../add-tutorial/add-tutorial.component';


@Component({
  selector: 'app-list-tutorial',
  providers : [TutorialService],
  templateUrl: './list-tutorial.component.html',
  styleUrls: ['./list-tutorial.component.css']
})
export class ListTutorialComponent implements OnInit {

  public TutorialList : Tutorial[];
  private tutorial : Tutorial;
  private opcionDialogo : string ;
  IdHerramienta: number;

  constructor(private tutorialService:TutorialService, public dialog: MatDialog) {
    this.TutorialList  = ELEMENT_Tutorial;
  }

  ngOnInit() {    
    this.getTutoriales();
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

  addTutorial():void{
    this.opcionDialogo = "Agregar";
    this.tutorial = new Tutorial();
    this.tutorial.toolId = 1;
    this.openDialog();
  }

  editTutorial(tutorials :  Tutorial){
    this.opcionDialogo = "Editar";
    this.tutorial = tutorials;    
    this.openDialog();
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(AddTutorialComponent, {
      width: '40%',
      height: '65%',
      data: { opcion: this.opcionDialogo, tutorial: this.tutorial}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("cerrado");
      console.log(dialogRef);
    });
  }

}

const ELEMENT_Tutorial: Tutorial[] = [
  {id: 6, name: 'Como usar la herramienta', objective  :"These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. !important is included to avoid specificity issues. These use the same viewport breakpoints as our grid system", toolId :1, url: "https://material.angular.io/components/expansion/overview" },
  {id: 7, name: 'Agregar una tarea', objective  :"manejar la información", toolId :1, url: "https://material.angular.io/components/expansion/overview"  },
  {id: 8, name: 'Probando informacion',  objective  :"manejar la información", toolId :1, url: "https://material.angular.io/components/expansion/overview"  },
  {id: 7, name: 'Agregar una tarea', objective  :"manejar la información", toolId :1, url: "https://material.angular.io/components/expansion/overview"  },  
  {id: 6, name: 'Como usar la herramienta', objective  :"These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. !important is included to avoid specificity issues. These use the same viewport breakpoints as our grid system", toolId :1, url: "https://material.angular.io/components/expansion/overview" }
];
