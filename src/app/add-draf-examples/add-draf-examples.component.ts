import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';
import { Example } from '../models/example.models';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-draf-examples',
  templateUrl: './add-draf-examples.component.html',
  styleUrls: ['./add-draf-examples.component.css'],
  providers : [Example],
})
export class AddDrafExamplesComponent implements OnInit {
  public invoiceForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddDrafExamplesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public newExample: Example, private _fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
  }
  initItemRows() {
    return this._fb.group({
      name: [''],
      link: ['']
    });
  }
  addItem(): void {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.push(this.initItemRows());
  }
  deleteRow(index: number) {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.removeAt(index);
  }
  buildAndSend(){
    if(this.invoiceForm.value.itemRows[0].name === '') {
      this.newExample.resources= [];
    }
    else{
      this.newExample.resources =this.invoiceForm.value.itemRows;
    }
    console.log(this.newExample);
  }
}

