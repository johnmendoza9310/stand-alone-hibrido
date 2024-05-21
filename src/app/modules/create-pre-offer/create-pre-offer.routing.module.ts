import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePreOfferOneComponent } from './create-pre-offer-one/create-pre-offer-one.component';
const routes: Routes = [

  {
    path: "",
    component: CreatePreOfferOneComponent
  }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CreatePreOffertRoutingModule { }
