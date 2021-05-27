import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import * as fromLocation from './location';
import * as fromGroup from './group';
import * as fromService from './service';
import * as fromDesk from './desk';
import * as fromIptv from './iptv';
import * as fromKiosk from './kiosk';

@NgModule({
  declarations: [
    fromLocation.components,
    fromGroup.components,
    fromService.components,
    fromDesk.components,
    fromIptv.components,
    fromKiosk.components,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
