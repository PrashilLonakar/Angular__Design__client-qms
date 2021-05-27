import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RegistrationComponent } from './auth/registration/registration.component';
import * as fromAuth from "./auth";

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [...fromAuth.components]
})
export class CoreModule { }
