import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  subRoutes?: any[];
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
  {
    path: "",
    title: "Master",
    icon: "nc-diamond",
    subRoutes: [
      {
        path: "/master/location",
        title: "Location",
        icon: "nc-diamond",
        class: "",
      },
      {
        path: "/master/group",
        title: "Group",
        icon: "nc-diamond",
        class: "",
      },
      {
        path: "/master/service",
        title: "Service",
        icon: "nc-diamond",
        class: "",
      },
      {
        path: "/master/desk",
        title: "Desk",
        icon: "nc-diamond",
        class: "",
      },
    ],
    class: "",
  },
  { path: "/icons", title: "Icons", icon: "nc-diamond", class: "" },
  { path: "/maps", title: "Maps", icon: "nc-pin-3", class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "nc-bell-55",
    class: "",
  },
  { path: "/user", title: "User Profile", icon: "nc-single-02", class: "" },
  { path: "/table", title: "Table List", icon: "nc-tile-56", class: "" },
  {
    path: "/typography",
    title: "Typography",
    icon: "nc-caps-small",
    class: "",
  },
  {
    path: "/upgrade",
    title: "Upgrade to PRO",
    icon: "nc-spaceship",
    class: "active-pro",
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
