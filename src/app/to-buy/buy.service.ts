import { Injectable } from '@angular/core';
import { Items } from './items';


@Injectable()

export class BuyService {

    buyList = [{
        id: 1,
        name: 'Scissors',
        description: 'use this to cut stuff',
        price: 4.99
    }, {
        id: 2,
        name: 'Steak Knives',
        description: 'use this to eat stuff',
        price: 10.99
    }, {
        id: 3,
        name: 'Shot Glass',
        description: 'use this to take shots',
        price: 5.99
    }];

    getProductsFromData(): Items[] {
        return this.buyList;
    }

    addProduct(item: Items){
        this.buyList.push(item)
    }
    
    deleteProduct(item: Items){
        this.buyList.splice(this.buyList.indexOf(item), 1);
    }


}