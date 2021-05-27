import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { FullPageComponent } from './layouts/full-page/full-page.component';
import { BlankPageComponent } from './layouts/blank-page/blank-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const AppRoutes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "dashboard",
  //   pathMatch: "full",
  // },
  // {
  //   path: "",
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren:
  //         "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
  //     },
  //   ],
  // },
  {
    path: "",
    component: FullPageComponent,
    //canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        // canActivate: [AuthGuard]
        //canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: "master",
        loadChildren: () =>
          import("./master/master.module").then((m) => m.MasterModule),
      }
    ],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
  {
    path: "",
    component: BlankPageComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
      // {
      //   path: "login",
      //   component: LoginComponent,
      // },
      // {
      //   path: "reset-password",
      //   component: ResetPasswordComponent,
      // },
      // {
      //   path: "transactions/performa-invoice",
      //   component: PerformaInvoiceTransactionComponent,
      // },
      // {
      //   path: "accessorys/performa-invoice",
      //   component: PerformaInvoiceAccessoryComponent,
      // },
    ],
  },
];
