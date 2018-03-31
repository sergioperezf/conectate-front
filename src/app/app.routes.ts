import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { EditToolComponent } from "./tools/edit/editTool.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'edit', component: EditToolComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const app_rountig = RouterModule.forRoot(routes);
