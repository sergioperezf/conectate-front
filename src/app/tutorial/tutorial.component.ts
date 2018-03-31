import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'
import {Tutorial} from '../models/tutorial.models'
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-tutorial',
  providers : [TutorialService],
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  IdHerramienta: number;
  public TutorialList : Tutorial[];


  constructor(private ruta:ActivatedRoute, private tutorialService:TutorialService) { }

  ngOnInit() {
    this.ruta.params.subscribe( parametro=> {
      this.IdHerramienta=parametro['id'];      
    })

    this.tutorialService.getTutorial(this.IdHerramienta).subscribe(
      result => {
          this.TutorialList = result;
          console.log(this.TutorialList)
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
