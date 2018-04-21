import { Component, OnInit, Input } from '@angular/core';
import { AddDrafExamplesComponent } from '../add-draf-examples/add-draf-examples.component';
import { MatDialog } from '@angular/material';
import { Example} from '../models/example.models';


@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.css']
})
export class ListExampleComponent implements OnInit {

  @Input() idTool : number;

  public ExampleList: Example[];

  constructor(private dialog: MatDialog,) { }

  ngOnInit() {
    this.getExamples();
  }

  getExamples () {
    /*this.tutorialService.getTutorial(this.idTool).subscribe(
      result => {
          this.TutorialList = result;
      },
      error => {
        console.log(<any>error);
      }
    ); */
  }

  showExample(example : Example){

  }

  editExample(example: Example){
    
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(AddDrafExamplesComponent, {
      width: '50%',
      height: '90%',
      data: {title: 'Moodle - foros', id: this.idTool}

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(dialogRef);
    });
  }

}
