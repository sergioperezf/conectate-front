import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { Inject } from '@angular/core';
import { Example } from '../models/example.models';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {ExamplesService} from '../services/examples.service';
import {PedagogicStrategyService} from '../services/pedagogic-strategy.service';
import {DisciplineService} from '../services/discipline.service';


@Component({
  selector: 'app-add-draf-examples',
  templateUrl: './add-draf-examples.component.html',
  styleUrls: ['./add-draf-examples.component.css'],
  providers : [Example, ExamplesService, PedagogicStrategyService, DisciplineService],

})
export class AddDrafExamplesComponent implements OnInit {
  public invoiceForm: FormGroup;
  public hideContent: Boolean = true;
  public errorMessage: String;
  public buttonMessage: String = 'Guardar borrador';
  public pegadogicObject: any[];
  public disciplines: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public newExample: Example,
              private _fb: FormBuilder,
              public exampleService: ExamplesService,
              public dialog: MatDialog,
              public strategyService: PedagogicStrategyService,
              public disciplineService: DisciplineService) {
  }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
    this.strategyService.getPedagogicStrategy().subscribe((data) => {
      this.pegadogicObject = data;
    }, (err) => {
      console.log('error obteniedo las estrategias', err);
      this.pegadogicObject =[
        {
          'id':1,
          'name':'Blended'
        },
        {
          'id':2,
          'name':'Virtual'
        },
        {
          'id':3,
          'name':'Presencial'
        },
      ];
    });
    this.disciplineService.getDisciplines().subscribe((data) => {
      this.disciplines = data;
    }, (err) => {
      console.log('error obteniedo las disciplinas', err);
      this.disciplines =[
        {
          'id':1,
          'name':'Ciencias exactas'
        },
        {
          'id':2,
          'name':'Ingenieria'
        },
        {
          'id':3,
          'name':'Ciencias sociales'
        },
      ];
    });
    console.log(this.data);
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
  buildAndSend() {
    this.hideContent = false;
    this.errorMessage ="";
    this.buttonMessage ="Guardar borrador";

    if (this.invoiceForm.value.itemRows[0].name === '') {
      this.newExample.resources= [];
    }
    else{
      this.newExample.resources =this.invoiceForm.value.itemRows;
      this.newExample.state= 'Borrador';
      this.newExample.tool = parseInt(this.data.id);
    }
    this.exampleService.addExample(this.newExample).subscribe((data) => {
      this.dialog.closeAll();
    }, (err) => {
      console.log(err);
      this.buttonMessage ="Reintentar";
      this.errorMessage = 'Ocurrio un error almacenando los datos Status: '+ err.status+ " Mensaje: " + err.message;
    });
  }
}

