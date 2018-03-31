import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'summernote/dist/summernote-bs4';
import { hostElement } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss'],
  inputs: ['value', 'name']
})
export class RichtextComponent {
  public tool: any = {};
  public value: string;
  public name: string;
  constructor(private hostElement: ElementRef) {
  }


  ngAfterViewInit() {
    let $textArea = $(this.hostElement.nativeElement).find('.richtext-editor');
    $textArea.summernote({
      height: 300
    });
  }
}
