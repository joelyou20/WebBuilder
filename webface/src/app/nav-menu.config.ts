import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages/pages.component";
import { SettingsComponent } from "./settings/settings.component";

export const routerConfig: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'pages',
      component: PagesComponent
  },
  {
      path: 'settings',
      component: SettingsComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];
