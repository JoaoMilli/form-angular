import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})



export class ProductServiceService {

  private produtos: Product[] = [
    {id: 1, nome: "produto1"},
    {id: 2, nome: "produto2"},
    {id: 3, nome: "produto3"},
  ]

  constructor() { }

  addProduct(p: Product){
    this.produtos.push(p)
  }

  getProductList(): Product[]{
    return this.produtos;
  }
}
