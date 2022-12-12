import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { CategoryComponent } from './main/category/category.component';
import { HomeComponent } from './main/home/home.component';
import { NotfoundComponent} from './notfound/notfound.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  { path:'navbar', component:NavbarComponent},
  { path:'about', component:AboutComponent},
  { path:'home', component:HomeComponent},
  { path:'category', component:CategoryComponent},
  { path:'footer', component:FooterComponent},
  { path:'**', component:NotfoundComponent},
  { path:'', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
