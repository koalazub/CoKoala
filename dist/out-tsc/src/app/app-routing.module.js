import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkPiecesComponent } from './work-pieces/work-pieces.component';
const routes = [
    { path: '', component: HomeComponent },
    { path: 'work-pieces', component: WorkPiecesComponent, data: { animation: 'isRight' } },
    { path: 'resume', component: ResumeComponent, data: { animation: 'isLeft' } },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map