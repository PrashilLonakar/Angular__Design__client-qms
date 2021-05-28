import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  subRoutes?: any[];
  bactive: boolean;
  type: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "nc-bank",
    class: "",
    type: "simple",
    bactive : false 
  },
  {
    path: "",
    title: "Master",
    icon: "nc-diamond",
    type: "dropdown",
    bactive: false,
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
      {
        path: "/master/iptv",
        title: "Iptv",
        icon: "nc-diamond",
        class: "",
      },
      {
        path: "/master/kiosk",
        title: "Kiosk",
        icon: "nc-diamond",
        class: "",
      },
      {
        path: "/master/box",
        title: "Box",
        icon: "nc-diamond",
        class: "",
      },
    ],
    class: "",
  },
  {
    path: "/icons",
    title: "Icons",
    icon: "nc-diamond",
    class: "",
    type: "simple",
    bactive: false,
  },
  {
    path: "/maps",
    title: "Maps",
    icon: "nc-pin-3",
    class: "",
    type: "simple",
    bactive: false,
  },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "nc-bell-55",
    class: "",
    type: "simple",
    bactive: false,
  },
  {
    path: "/user",
    title: "User Profile",
    icon: "nc-single-02",
    class: "",
    type: "simple",
    bactive : false 
  },
  {
    path: "/table",
    title: "Table List",
    icon: "nc-tile-56",
    class: "",
    type: "simple",
    bactive : false 
  },
  {
    path: "/typography",
    title: "Typography",
    icon: "nc-caps-small",
    class: "",
    type: "simple",
    bactive : false 
  },
  {
    path: "/upgrade",
    title: "Upgrade to PRO",
    icon: "nc-spaceship",
    class: "active-pro",
    type: "simple",
    bactive : false 
  },
];

@Component({
  selector: "app-nav-sidebar",
  templateUrl: "./nav-sidebar.component.html",
  styleUrls: ["./nav-sidebar.component.css"],
  animations: [
    trigger("slide", [
      state("up", style({ height: 0 })),
      state("down", style({ height: "*" })),
      transition("up <=> down", animate(200)),
    ]),
  ],
})
export class NavSidebarComponent implements OnInit {
  public menuItems: any[];
  Keys;
  toggle = false;
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  onToggle(key) {
    key.bactive = !key.bactive;
  }

  onSubToggle(key) {
    this.Keys = key;
    this.toggle = true;
    console.log("key =>", this.Keys, "toggle =>", this.toggle);
  }
}
