import { Injectable } from '@angular/core';
import {Product} from './products';

@Injectable({
  providedIn : 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
   
    this.items.push(product);
    console.log(this.items);
  }

  getItems() : Product[] {
    console.log(this.items);
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}