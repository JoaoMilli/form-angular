import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Pedido } from '../pedido';

@Injectable({
  providedIn: 'root'
})



export class ProductServiceService {

  private produtos: Product[] = [
    {id: 1, nome: "produto1", tipo: 1},
    {id: 2, nome: "produto2", tipo: 2},
    {id: 3, nome: "produto3", tipo: 3}
  ];

  private pedidosCarrinho: Pedido[] = []

  constructor() { }

  addProduct(p: Product){
    console.log(this.produtos)
    this.produtos.push(p)
    console.log(this.produtos)
  }

  getProductList(): Product[]{
    return this.produtos;
  }

  addProductCarrinho(p: Pedido){
    this.pedidosCarrinho.push(p)
  }

  getProductListCarrinho(): Pedido[]{
    return this.pedidosCarrinho;
  }

  removeProduct(p:Product){
    console.log(this.produtos)
    this.produtos = this.produtos.filter((obj) => {return(obj.id != p.id)})
    console.log(this.produtos)
  }

  removeProductCarrinho(p:Pedido){
    console.log(this.pedidosCarrinho)
    this.pedidosCarrinho = this.pedidosCarrinho.filter((obj) => {return(obj.idPedido != p.idPedido)})
    console.log(this.pedidosCarrinho)
  }

  removeProductIDCarrinho(p:Product){
    this.pedidosCarrinho = this.pedidosCarrinho.filter((obj) => {return(obj.produto != p)})
  }
}
