import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreOfferListOneComponent } from './pre-offer-list-one/pre-offer-list-one.component';
import { PreOfferListTwoComponent } from './pre-offer-list-two/pre-offer-list-two.component';
const routes: Routes = [

  {
    path: "",
    component: PreOfferListOneComponent
  }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PreOfferListRoutingModule { }
