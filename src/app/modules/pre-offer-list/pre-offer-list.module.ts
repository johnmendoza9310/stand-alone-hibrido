import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreOfferListRoutingModule } from './pre-offer-list.routing.module';
import { AtomOneComponent } from '../../velocity/atoms/atom-one/atom-one.component';
import { PreOfferListOneComponent } from './pre-offer-list-one/pre-offer-list-one.component';

@NgModule({
  declarations: [PreOfferListOneComponent],
  imports: [CommonModule, PreOfferListRoutingModule, AtomOneComponent],
})
export class PreOfferListModule {}
