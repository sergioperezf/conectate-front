import { Component, OnInit } from '@angular/core';
import {HomelistService} from "../services/homelist.service";
import { AddDrafExamplesComponent } from '../add-draf-examples/add-draf-examples.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  providers:[HomelistService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public toolsObject:any[]=[];
  public filterargs: String ="";
  public strategyFilter: String ="";
  constructor(public toolList: HomelistService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.toolList.getTools().subscribe(
      result => {
          this.toolsObject = result;
          console.log(this.toolsObject);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  abrirDialogo(): void {
    let dialogRef = this.dialog.open(AddDrafExamplesComponent, {
      width: '50%',
      height: '90%',
      data: { title: 'Moodle - foros', id: 1}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(dialogRef);
    });
  }

  filterData(filter,keyCode){
    if (keyCode === 13  && filter.toString() !== '') {
      this.toolList.getTools().subscribe(
        result => {
          let filterByName: any[] = result.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
          let filterByKeyWords: any[] = result.filter(item => item.keyWords.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
          let results = filterByName.concat(filterByKeyWords);
          let hash = {};
          results = results.filter((current) => {
            let exists = !hash[current.id] || false;
            hash[current.id] = true;
            return exists;
          });
          this.toolsObject = results;
        },
        error => {
          console.log(<any>error);
        }
      );
    } else if (keyCode === 13 && filter.toString() === '' ){
      this.toolList.getTools().subscribe(
        result => {
          this.toolsObject = result;
          console.log(this.toolsObject);
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }
}
