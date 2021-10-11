import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { TopMainComponent } from './top-main/top-main.component';
import { ContentComponent } from './content/content.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FilmComponent } from './film/film.component';
import { SideAdsMenuComponent } from './side-ads-menu/side-ads-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    TopMainComponent,
    ContentComponent,
    SideMenuComponent,
    MenuListComponent,
    MainContentComponent,
    FilmComponent,
    SideAdsMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
