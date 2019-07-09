import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {ResumeComponent} from './resume/resume.component';
import {WorkPiecesComponent} from './work-pieces/work-pieces.component';
import {HomeComponent} from './home/home.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {BackgroundImageComponent} from './background-image/background-image.component';
import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'work-pieces', component: WorkPiecesComponent},
  {path: 'resume', component: ResumeComponent},
  {path: '**', component: PageNotFoundComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ResumeComponent,
    WorkPiecesComponent,
    HomeComponent,
    BackgroundImageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
