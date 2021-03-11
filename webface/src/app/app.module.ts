import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { NavComponent } from './nav/nav.component';
import { SitePanelComponent } from './site-panel/site-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    SettingsComponent,
    NavComponent,
    SitePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'pages', component: PagesComponent},
      {path: 'settings', component: SettingsComponent},
    ])
  ],
  exports: [
    NavComponent,
    PagesComponent,
    SitePanelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
