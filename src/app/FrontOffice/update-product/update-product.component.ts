import { Component } from '@angular/core';
import { ProductServiceService } from '../ProductCrudService/product-service.service';
import { Router } from '@angular/router';
import { product } from '../Models/products.Model';
import { ApiResponse } from 'src/app/FrontOffice/Models/api.response' ;
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  id: number;
  Product: product;
  apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,private productService: ProductServiceService) { }

  ngOnInit() {
    this.Product = new product();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((data) => {
      console.log(data)
      this.Product.descriptionProduit = data["descriptionProduit"];
      this.Product.NomProduit = data['nomProduit'] || '';
      this.Product.prixProduit = data['prixProduit'] || 0; 
    });
  }

  onSubmit() {
    this.productService.updateProduct(this.id, this.Product).subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['user','list-products']);
    }

  
  list(){
    this.router.navigate(['product-list']);
  }

}
