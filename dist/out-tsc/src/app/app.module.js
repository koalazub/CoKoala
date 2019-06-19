import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkPiecesComponent } from './work-pieces/work-pieces.component';
import { HomeComponent } from './home/home.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
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