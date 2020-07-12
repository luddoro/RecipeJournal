import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColumnsComponent } from './components/welcome-page/columns/columns.component';
import { RecipeListPageComponent } from './components/recipe-list-page/recipe-list-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

/*Lägg Angular Material här */
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    RecipeListPageComponent,
    ColumnsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
