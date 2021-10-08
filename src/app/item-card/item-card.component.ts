import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {

  @Input() produto: Product = {nome: "null", id:-1, tipo: -1}

  constructor() { }

  ngOnInit(): void {
  }

}
