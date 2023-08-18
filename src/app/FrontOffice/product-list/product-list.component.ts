import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../ProductCrudService/product-service.service';
import { Router } from '@angular/router';
import { product } from '../Models/products.Model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   
  products: any;
  constructor(private produitService:ProductServiceService,private router:Router){}

  ngOnInit(): void {
    this.getAllProducts()
  }
  
  getAllProducts() {
    this.produitService.getAllProducts().subscribe((data: any) => {this.products = data;console.log(this.products);
    });

  }
  deleteProduct(id: number) {
    this.produitService.deleteProduct(id)
      .subscribe((val:any) => this.getAllProducts());
  }

  updateProduct(id: number){
    this.router.navigate(['user','update-products', id]);
  }



}
