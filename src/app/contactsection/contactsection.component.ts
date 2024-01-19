import { Component } from '@angular/core';
import { Portfoliocont } from '../portfoliocont';
import { Router } from '@angular/router';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-contactsection',
  templateUrl: './contactsection.component.html',
  styleUrls: ['./contactsection.component.css']
})
export class ContactsectionComponent {

  // portfoliocont:Portfoliocont=new Portfoliocont();

  // constructor(private portfolioService:PortfolioService, private router:Router){ }
  
  // onSend(){
  //   console.log(this.portfoliocont);
  //   this.saveContact();
  //   this.returnContact();
  // }

  //   saveContact(){
  //     this.portfolioService.insertValues(this.portfoliocont).subscribe(data => {console.log(data)});
  //   }

  //   returnContact():void {
  //     this.router.navigate(['portfolio-home']);
  //   }


  
}


