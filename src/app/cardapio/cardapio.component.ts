import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from '../form/form.component';
import { ProductServiceService } from '../Services/product-service.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.sass']
})


export class CardapioComponent implements OnInit {

  nomeProd: string = '';
  idProd: number = 0;
  products: Product[] = [];
  columns: string[] = ["Id", "Nome"];

  constructor(private departmentProducts: ProductServiceService) { }

  ngOnInit() {
    this.products = this.departmentProducts.getProductList();
  }

  addProduto(){
    this.departmentProducts.addProduct({nome: this.nomeProd, id: this.idProd})
    this.clear()
  }

  clear(){
    this.nomeProd = ''
    this.idProd = 0
  }
}
