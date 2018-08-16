import { Component, OnInit } from '@angular/core';
import { Items } from './items';
import { BuyService } from './buy.service';


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

  constructor(private _itemService: BuyService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.items = this._itemService.getProductsFromData();
  }

  addNewItem(){
    if(!this.itemForm){
      this.itemForm = true;
      this.newItem = {};
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
    this.editItemForm = false;
    this.newItem = item;
  }

  saveItem (item: Items){
    if(this.newItem){
      this._itemService.addProduct(item);
    } else {

    }
    this.itemForm = false;
  }

  cancelItem(item: Items){
    this.newItem = {};
    this.itemForm = false;
  }

  deleteItem(item: Items){
    this._itemService.deleteProduct(item);
  }

}
