import { Component, OnInit } from '@angular/core';
import { HomelistService } from '../../services/homelist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tool',
  templateUrl: './editTool.component.html',
  styleUrls: ['./editTool.component.css'],
  providers:[HomelistService]
})
export class EditToolComponent implements OnInit {
  toolId: number;
  public name: string;
  public description: string;

  constructor(private route:ActivatedRoute, public toolList: HomelistService) {
  }

  ngOnInit() {

    this.route.params.subscribe( param=> {
      this.toolId=param['id'];      
    })

    this.toolList.getTool(this.toolId).subscribe(
      result => {
          this.name = result.name;
          this.description = result.description;
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
