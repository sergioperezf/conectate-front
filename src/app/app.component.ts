import { Component } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private route: ActivatedRoute, public router: Router) {
  }
  closeSession(){
    sessionStorage.clear();
    this.router.navigate(['home']);
  }
}
