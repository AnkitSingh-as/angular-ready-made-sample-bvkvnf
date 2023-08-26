export const products = [
  {
    name: 'Phone XL',
    id:1,
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    id: 2, 
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard', 
    id: 3, 
    price: 299,
    description: ''
  }
];

export interface Product{
  name: String;
  id: number; 
  price: number;
  description: String;
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/