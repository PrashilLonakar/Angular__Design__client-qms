import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MasterRoutingModule } from './master-routing.module';
import * as fromLocation from './location';
import * as fromGroup from './group';
import * as fromService from './service';
import * as fromDesk from './desk';
import * as fromIptv from './iptv';
import * as fromKiosk from './kiosk';
import * as fromBox from './box';

@NgModule({
  declarations: [
    fromLocation.components,
    fromGroup.components,
    fromService.components,
    fromDesk.components,
    fromIptv.components,
    fromKiosk.components,
    fromBox.components
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
