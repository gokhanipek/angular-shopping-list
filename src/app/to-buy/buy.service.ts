import { Injectable } from '@angular/core';
import { Items } from './items';


@Injectable()

export class ProductService {

    getProductsFromData(): Items[] {
        return [{
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
    }


}