import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../ProductCrudService/product-service.service';
import { Router } from '@angular/router';
import { product } from '../Models/products.Model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 produit:product=new product(); 
 submitted=false;
 constructor(private produitService:ProductServiceService,private router:Router){}
  ngOnInit(): void {
      
  }
 OnSubmit(){
    this.submitted=true;
    this.produitService.addProduct(this.produit).subscribe();
      this.produit=new product();
      this.router.navigate(['/user/products']);
  }
}
