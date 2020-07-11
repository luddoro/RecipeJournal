import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component'
import { RecipeListPageComponent } from "./components/recipe-list-page/recipe-list-page.component";


const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'list', component: RecipeListPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
