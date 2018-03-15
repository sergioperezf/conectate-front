import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public toolsObject:any[]=[];
  constructor() {
  }

  ngOnInit() {
    let toolsObject=[
      {
        "name":"Foros moodle",
        "image":"",
        "description":"Foros para preguntas e interacción entre estudiantes y alumnos",
        "keywords":"Moodle, foros",
        "pedagogicStrategy":"Interacción de alumnos"
      },
      {
        "name":"Sicua tareas",
        "image":"",
        "description":"Foros para preguntas e interacción entre estudiantes y alumnos",
        "keywords":"Sicua, tareas",
        "pedagogicStrategy":"Tareas web"
      },
      {
        "name":"Blog",
        "image":"",
        "description":"Blog para preguntas e interacción entre estudiantes y alumnos",
        "keywords":"Blog, paginas",
        "pedagogicStrategy":"Temas de lectura publica"
      },
      {
        "name":"Green cookie",
        "image":"",
        "description":"Foros para preguntas e interacción entre estudiantes y alumnos",
        "keywords":"Lecturas",
        "pedagogicStrategy":"Aprendizaje autodidacta"
      },
    ];
    this.toolsObject = toolsObject;
  }

}
