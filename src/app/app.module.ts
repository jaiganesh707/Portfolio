import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesectionComponent } from './homesection/homesection.component';
import { AboutsectionComponent } from './aboutsection/aboutsection.component';
import { ServicesectionComponent } from './servicesection/servicesection.component';
import { PortfoliosectionComponent } from './portfoliosection/portfoliosection.component';
import { ContactsectionComponent } from './contactsection/contactsection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomesectionComponent,
    AboutsectionComponent,
    ServicesectionComponent,
    PortfoliosectionComponent,
    ContactsectionComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
