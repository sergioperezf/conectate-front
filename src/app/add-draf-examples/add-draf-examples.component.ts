import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';
import { Example } from '../models/example.models';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-draf-examples',
  templateUrl: './add-draf-examples.component.html',
  styleUrls: ['./add-draf-examples.component.css'],
  providers : [Example],
})
export class AddDrafExamplesComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddDrafExamplesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public newExample: Example) { }

  ngOnInit() {
    console.log('Iniciando ventana de dialogo');
  }

}
