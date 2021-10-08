import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  name: string = '' ;
  ID!: number;
  type!: number;

  ngOnInit(): void {
  }

  addProduto(){
    this.productService.addProduct({nome: this.name, id: this.ID, tipo: this.type})
  }

}
