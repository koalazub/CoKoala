import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import * as tslib_1 from "tslib";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BackgroundImageComponent} from './background-image/background-image.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ResumeComponent} from './resume/resume.component';
import {WorkPiecesComponent} from './work-pieces/work-pieces.component';

const appRoutes = [
  {path: '**', component: PageNotFoundComponent},
  {path: 'work-pieces', component: WorkPiecesComponent},
  {path: 'resume', component: ResumeComponent}
];
let AppModule = class AppModule
  {
  };
AppModule = tslib_1.__decorate([
  NgModule({
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
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
