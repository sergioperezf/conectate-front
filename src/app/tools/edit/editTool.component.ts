import { Component, OnInit } from '@angular/core';
import { HomelistService } from '../../services/homelist.service';

@Component({
  selector: 'app-edit-tool',
  templateUrl: './editTool.component.html',
  styleUrls: ['./editTool.component.css'],
  providers:[HomelistService]
})
export class EditToolComponent implements OnInit {
  public name: string;
  public description: string;

  constructor(public toolList: HomelistService) {
  }

  ngOnInit() {
    this.toolList.getTools().subscribe(
      result => {
          this.name = result[0].name;
          this.description = result[0].description;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit() {
    console.log(this.name);
  }
}
