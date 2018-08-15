import { Component, OnInit } from '@angular/core';
import { Items } from './items';
import { ProductService } from './buy.service';


@Component({
  selector: 'app-to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.css']
})
export class ToBuyComponent implements OnInit {

  items: Items[];
  itemForm:boolean = false;
  editItemForm:boolean = false;
  newItem: any = {};

  constructor(private _itemService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.items = this._itemService.getProductsFromData();
  }

  addNewItem(){
    if(!this.itemForm){
      this.itemForm = true;
    }else {
      this.itemForm = false;
    }
  }

  updateItem(item: Items){
    if(!item){
      this.itemForm=false;
      return;
    }  
    this.itemForm = true;
    this.editItemForm = true;
    this.newItem = item;
  }

}
