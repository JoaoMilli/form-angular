import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from '../form/form.component';
import { ProductServiceService } from '../Services/product-service.service';
import { Product } from '../models/product';
import { Pedido } from '../pedido';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.sass']
})


export class CardapioComponent implements OnInit {

  nomeProd: string = '';
  idProd: number = 0;
  tipoProd!: number;
  products: Product[] = [];
  columns: string[] = ["Id", "Nome"];
  IDPEDIDOS: number = 0

  constructor(private departmentProducts: ProductServiceService) { }

  ngOnInit() {
    this.products = this.departmentProducts.getProductList();
  }

  addProduto(){
    this.departmentProducts.addProduct({nome: this.nomeProd, id: this.idProd, tipo: this.tipoProd})
    this.clear()
  }

  clear(){
    this.nomeProd = ''
    this.idProd = 0
  }

  addProdutoCarrinho(p: Product){
    this.departmentProducts.addProductCarrinho({produto: p, idPedido: this.IDPEDIDOS})
    this.IDPEDIDOS++
  }

  removeProduto(p: Product){
    this.departmentProducts.removeProduct(p)
    this.departmentProducts.removeProductIDCarrinho(p)
    this.products = this.departmentProducts.getProductList()
  }
}
