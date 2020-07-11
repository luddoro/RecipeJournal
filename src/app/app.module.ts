import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { RecipeListPageComponent } from './components/recipe-list-page/recipe-list-page.component';
import { ColumnsComponent } from './components/welcome-page/columns/columns.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    RecipeListPageComponent,
    ColumnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
