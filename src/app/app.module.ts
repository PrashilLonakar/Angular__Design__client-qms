import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FullPageComponent } from './layouts/full-page/full-page.component';
import { BlankPageComponent } from './layouts/blank-page/blank-page.component';
import { NavSidebarComponent } from './layouts/components/nav-sidebar/nav-sidebar.component';
import { NavHeaderComponent } from './layouts/components/nav-header/nav-header.component';
import { NavFooterComponent } from './layouts/components/nav-footer/nav-footer.component';
import { NavFixedpluginComponent } from './layouts/components/nav-fixedplugin/nav-fixedplugin.component';
import { LoginComponent } from './core/auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FullPageComponent,
    BlankPageComponent,
    NavSidebarComponent,
    NavHeaderComponent,
    NavFooterComponent,
    NavFixedpluginComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
