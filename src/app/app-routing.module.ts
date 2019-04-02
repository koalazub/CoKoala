import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {WorkPiecesComponent} from './work-pieces/work-pieces.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'work-pieces', component: WorkPiecesComponent},
  {path: 'resume', component: ResumeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
