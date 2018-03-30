import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'summernote';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.css']
})
export class RichtextComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
    $('.richtext-editor').summernote();
  }
}
