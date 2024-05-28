import { Injectable } from '@angular/core';

// Define the Product class
export class Product {
  constructor(
    public productID: number,
    public name: string,
    public price: number
  ) {}
}

@Injectable({
  providedIn: 'root' 
})
export class ProductServiceService {

  constructor() { }

  public getProducts(): Product[] {
    let products: Product[] = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100)
    ];

    return products;
  }

  public getProductById(id: number): Product | undefined {
    let products: Product[] = this.getProducts();
    return products.find(p => p.productID === id);
  }
}
