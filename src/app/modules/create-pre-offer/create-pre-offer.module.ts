import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePreOfferOneComponent } from './create-pre-offer-one/create-pre-offer-one.component';
import { CreatePreOffertRoutingModule } from './create-pre-offer.routing.module';
import { AtomOneComponent } from '../../velocity/atoms/atom-one/atom-one.component';
import { AtomTwoComponent } from '../../velocity/atoms/atom-two/atom-two.component';



@NgModule({
  declarations: [CreatePreOfferOneComponent, ],
  imports: [
    CommonModule,
    CreatePreOffertRoutingModule,
    AtomTwoComponent
  ]
})
export class CreatePreOfferModule { }
