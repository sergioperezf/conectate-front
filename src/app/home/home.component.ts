import { Component, OnInit } from '@angular/core';
import {HomelistService} from "../services/homelist.service";

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
  constructor(public toolList:HomelistService) {
  }

  ngOnInit() {
    this.toolList.getTools().subscribe(
      result => {
          this.toolsObject = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
