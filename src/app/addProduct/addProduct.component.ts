import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { parse } from 'node:path';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.scss']
})
export class AddProductComponent implements OnInit {
// formProduct=new FormGroup({
//   productCode:new FormControl(),
//   qty:new FormControl(),
//   unitPrice:new FormControl(),
//   discount:new FormControl(),

// })

produtCode;
qty:number = 0
unitPrice: number = 0
discount: number = 0
total: number;


  constructor() { }

  ngOnInit() {
  }


  totals () {
    // Total = (Quantity*UnitPrice)-Discount
    this.total = (this.qty*this.unitPrice)- this.discount;
  }


}
