import { Component, OnInit } from '@angular/core';

interface MenuItem {
  path?: string;
  identifierContent: string;
  text: string;
  iconName: string;
}

interface MenuBodyItem {
  identifier: string;
  sections: MenuSections;
}

interface MenuSection {
  options: MenuOptions;
  title: string;
}

interface MenuOption {
  text: string;
  path: string;
}

type MenuSections = MenuSection[];
type MenuBodyItems = MenuBodyItem[];
type MenuItems = MenuItem[];
type MenuOptions = MenuOption[];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public showMenu: boolean = true;
  public menuItems: MenuItems = [];
  public menuBodyItems: MenuBodyItems = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { identifierContent: "home", text: "Inicio", iconName: "home", path: "" },
      { identifierContent: "upload", text: "Subir archivos", iconName: "cloud-upload", path: "/upload" },
      { identifierContent: "tracing", text: "Seguimiento", iconName: "receipt", path: "/tracing" },
      { identifierContent: "performance", text: "Resultados", iconName: "performance", path: "/tracing" },

    ];

    this.menuBodyItems = [];
  }

}
