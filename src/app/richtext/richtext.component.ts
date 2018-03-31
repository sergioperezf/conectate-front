import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'summernote/dist/summernote-bs4';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss']
})
export class RichtextComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
    $('.richtext-editor').summernote();
  }
}
