import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  name = new FormControl('Samsung S5');
  description = new FormControl('iyi telefon');
  price = new FormControl('1000');
  imageUrl = new FormControl('1.jpg');

  updateName(){
    this.name.setValue("Ad güncellendi!");
  }

}
