import { Component, OnInit , Inject} from '@angular/core';
import { Tutorial} from '../models/tutorial.models'
import { TutorialService } from '../services/tutorial.service';
import { NgForm } from '@angular/forms';
import { error } from 'util';
import { MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-tutorial',
  providers : [TutorialService],
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  public tutorial:  Tutorial;
  private accion : string;
  
  constructor(private tutorialService:TutorialService, private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddTutorialComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.tutorial = new Tutorial();    
    this.accion = this.data.opcion;
    this.tutorial = this.data.tutorial;
  }

  onSubmit(f: NgForm){     
    
    if (f.invalid){      
      this.snackBar.open("Por favor ingrese los datos requeridos. ", "Validación", {
        duration : 5000
      })
      return;
    }
        
    this.tutorialService.addTutorial(this.tutorial).subscribe(
      result =>{
        this.snackBar.open("Datos guardados correctamente. ", "Hecho", {
          duration : 5000
        })
        this.tutorial = new Tutorial();    
      }, 
      error => {
        this.snackBar.open("Error al guardar datos del tutorial", "Error", {
           duration :5000
        })
        console.log(<any>error);
      }
      
    );
  }
}
