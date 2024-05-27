import { Component, OnInit } from '@angular/core';
import { ProductServiceService, Product } from './product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: Product[]; // Declare products array as optional

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
