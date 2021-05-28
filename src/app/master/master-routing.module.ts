import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromLocation from './location';
import * as fromGroup from './group';
import * as fromService from './service';
import * as fromDesk from './desk';
import * as fromIptv from './iptv';
import * as fromKiosk from './kiosk';
import * as fromBox from './box';

const routes: Routes = [
  {
    path: "location",
    children: [
      {
        path: "",
        component: fromLocation.components[0],
        data: {
        }
      },
      {
        path: "add",
        component: fromLocation.components[1],
        data: {
          type: "add",
        }
      },
      {
        path: "edit/:id",
        component: fromLocation.components[1],
        data: {
          type: "edit",
        }
      }
    ]
  },
  {
    path: "group",
    children: [
      {
        path: "",
        component: fromGroup.components[0],
        data: {
        }
      },
      {
        path: "add",
        component: fromGroup.components[1],
        data: {
          type: "add",
        }
      },
      {
        path: "edit/:id",
        component: fromGroup.components[1],
        data: {
          type: "edit",
        }
      }
    ]
  },
  {
    path: "iptv",
    children: [
      {
        path: "",
        component: fromIptv.components[0],
        data: {
        }
      },
      {
        path: "add",
        component: fromIptv.components[1],
        data: {
          type: "add",
        }
      },
      {
        path: "edit/:id",
        component: fromIptv.components[1],
        data: {
          type: "edit",
        }
      }
    ]
  },
  {
    path: "kiosk",
    children: [
      {
        path: "",
        component: fromKiosk.components[0],
        data: {
        }
      },
      {
        path: "add",
        component: fromKiosk.components[1],
        data: {
          type: "add",
        }
      },
      {
        path: "edit/:id",
        component: fromKiosk.components[1],
        data: {
          type: "edit",
        }
      }
    ]
  },
  {
    path: "service",
    children: [
      {
        path: "",
        component: fromService.components[0],
        data: {
        }
      },
      {
        path: "add",
        component: fromService.components[1],
        data: {
          type: "add",
        }
      },
      {
        path: "edit/:id",
        component: fromService.components[1],
        data: {
          type: "edit",
        }
      }
    ]
  },
  {
    path: "desk",
    children: [
      {
        path: "",
        component: fromDesk.components[0],
        data: {
        }
      },
      {
        path: "add",
        component: fromDesk.components[1],
        data: {
          type: "add",
        }
      },
      {
        path: "edit/:id",
        component: fromDesk.components[1],
        data: {
          type: "edit",
        }
      }
    ]
  },
  {
    path: "box",
    children: [
      {
        path: "",
        component: fromBox.components[0],
        data: {
        }
      },
      {
        path: "add",
        component: fromBox.components[1],
        data: {
          type: "add",
        }
      },
      {
        path: "edit/:id",
        component: fromBox.components[1],
        data: {
          type: "edit",
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
