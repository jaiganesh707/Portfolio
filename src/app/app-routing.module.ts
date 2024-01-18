import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesectionComponent } from './homesection/homesection.component';
import { AboutsectionComponent } from './aboutsection/aboutsection.component';
import { ServicesectionComponent } from './servicesection/servicesection.component';
import { PortfoliosectionComponent } from './portfoliosection/portfoliosection.component';
import { ContactsectionComponent } from './contactsection/contactsection.component';

const routes: Routes = [
  {path:'portfolio-home' ,component:HomesectionComponent},
  {path:'portfolio-about' ,component:AboutsectionComponent},
  {path:'portfolio-service' ,component:ServicesectionComponent},
  {path:'portfolio-projects' ,component:PortfoliosectionComponent},
  {path:'portfolio-contact' ,component:ContactsectionComponent},
  {path:'' ,redirectTo:'portfolio-home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

