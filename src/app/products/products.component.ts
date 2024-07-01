import { Component, OnInit } from '@angular/core';
import { productRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/produts/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products:productRepresentation[]=[];
  constructor(private service:ProductService){
  }

  ngOnInit(): void {
     
      
      this.service.getAllProductsWithLimit()
      .subscribe({
        next:(result:productRepresentation[]):void=>{
          this.products=result;
        }
      });
  }
}
