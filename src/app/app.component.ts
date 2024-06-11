import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  total = 0;
  qty = 0;
  prodname = "";

  

  foodmenu = [
    { id: 1, name: "دجاج", price: 30, description: "دجاج مشوي على الفحم", img: "assets/images/cheken.jpg" },
    { id: 2, name: "دجاج", price: 30, description: "دجاج شواية ", img: "assets/images/cheken.jpg" },
    { id: 3, name: "ايدام", price: 20, description: "ايدام خضار مشكل", img: "assets/images/edam.jpg" },
    { id: 4, name: "ايدام", price: 20, description: "ايدام  بالدجاج على الفرن", img: "assets/images/edam2.jpg" }
  ]

  sum(event: any, price: number) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.total += price;
      this.qty += 1;
    } else {
      this.total -= price;
      this.qty -= 1;
    }

  }

  find(prd: any[]) {
    return prd.filter(item => item.name.toLowerCase().includes(this.prodname.toLowerCase()))
  }
  title = 'my-angular-app';
}
