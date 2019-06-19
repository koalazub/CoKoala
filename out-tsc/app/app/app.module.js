import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import * as tslib_1 from "tslib";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BackgroundImageComponent} from './background-image/background-image.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {ResumeComponent} from './resume/resume.component';
import {WorkPiecesComponent} from './work-pieces/work-pieces.component';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavComponent,
                ResumeComponent,
                WorkPiecesComponent,
              HomeComponent,
              BackgroundImageComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                NgxExtendedPdfViewerModule,
              MatButtonModule,
              MatCardModule,
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
