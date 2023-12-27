import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-empty',
  templateUrl: './order-empty.component.html',
  styleUrls: ['./order-empty.component.css']
})
export class OrderEmptyComponent {
  constructor(private router:Router){}
  search(laptopName:string)
  {
      this.router.navigate(['/search2',laptopName]);
  }

  goToHome2()
  {
    this.router.navigate(['/home2']);
  }
}
