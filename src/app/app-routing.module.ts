import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {WorkPiecesComponent} from './work-pieces/work-pieces.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'work-pieces', component: WorkPiecesComponent, data: {animation: 'isRight'}},
  {path: 'resume', component: ResumeComponent, data: {animation: 'isLeft'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
