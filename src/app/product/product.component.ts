import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    description: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    imageUrl: new FormControl('',[Validators.required])
  });

  get name(){
    return this.productForm.get('name');
  }


  onSubmit(){
    console.log(this.productForm.value);
  }
  
  updateProduct(){
    this.productForm.patchValue({
      name: "Iphone X",
      price: 5000
    });
  }

}
