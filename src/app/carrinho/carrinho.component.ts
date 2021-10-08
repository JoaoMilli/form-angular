import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Pedido } from '../pedido';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.sass']
})
export class CarrinhoComponent implements OnInit {

  listaCarrinho: Pedido[] = []


  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.listaCarrinho = this.productService.getProductListCarrinho()
  }

  
  removeProdutoCarrinho(p: Pedido){
    this.productService.removeProductCarrinho(p)
    this.listaCarrinho = this.productService.getProductListCarrinho();
  }
}
