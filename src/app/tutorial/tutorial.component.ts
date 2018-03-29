import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  IdHerramienta: number;

  constructor(private ruta:ActivatedRoute) { }

  ngOnInit() {
    this.ruta.params.subscribe( parametro=> {
      this.IdHerramienta=parametro['id'];
      console.log(this.IdHerramienta);
    })
  }

}
