import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Tool } from '../models/tool.models';
import { ToolService } from '../services/tool.service';

@Component({
  selector: 'app-detail-tool',
  providers: [ToolService],
  templateUrl: './detail-tool.component.html',
  styleUrls: ['./detail-tool.component.css']
})
export class DetailToolComponent implements OnInit {


  private tool : Tool;
  private title : string = "Detalle de herramienta";
  private admin: Boolean = false;
  private idTool : number;

  constructor(private route: ActivatedRoute, private toolService:ToolService) {
    this.tool = new Tool();    
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idTool = params['id'];
    });

    this.getDetail();
    
    let sesion = sessionStorage.getItem('login');
    if(sesion){
      this.admin = true;
    }    
  }

  

  getDetail (){
    this.toolService.get(this.idTool).subscribe(
      result => {
          this.tool = result;              
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
