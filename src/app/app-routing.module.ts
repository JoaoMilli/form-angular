import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { FormComponent } from './form/form.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'form', component: FormComponent},
  {path:'front-page', component: FrontPageComponent},
  {path:'add-product', component:AddProductComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
