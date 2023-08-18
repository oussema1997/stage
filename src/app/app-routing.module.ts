import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { ProductsComponent } from './FrontOffice/productsCreate/products.component';
import { ProductListComponent } from './FrontOffice/product-list/product-list.component';
import { UpdateProductComponent } from './FrontOffice/update-product/update-product.component';


const routes: Routes = [
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      
        {
          path:"add-products",
          component:ProductsComponent
        },
        {
          path:"list-products",
          component:ProductListComponent
        },
        {
          path:"update-products/:id",
          component:UpdateProductComponent
        },
        {
        path: 'home',
        component: BodyUserComponent,
       
      }
    ]
  },
  {
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      {path : 'home',
    component : BodyAdminComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
