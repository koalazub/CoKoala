import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import * as tslib_1 from "tslib";
import {AppRoutingModule} from './app-routing.module.tns';
import {AppComponent} from './app.component';
import {AutoGeneratedComponent} from './auto-generated/auto-generated.component';
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
var AppModule = /** @class */ (function ()
  {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule()
      {
      }

    AppModule = tslib_1.__decorate([
      NgModule({
        declarations: [
          AppComponent,
          AutoGeneratedComponent,
        ],
        imports: [
          AppRoutingModule,
        ],
        providers: [],
        bootstrap: [AppComponent],
        schemas: [NO_ERRORS_SCHEMA]
      })
      /*
      Pass your application module to the bootstrapModule function located in main.ts to start your app
      */
    ], AppModule);
    return AppModule;
  }());
export {AppModule};
//# sourceMappingURL=app.module.tns.js.map
