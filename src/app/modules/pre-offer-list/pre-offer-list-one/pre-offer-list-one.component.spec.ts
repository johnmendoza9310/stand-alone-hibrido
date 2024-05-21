import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOfferListOneComponent } from './pre-offer-list-one.component';

describe('PreOfferListOneComponent', () => {
  let component: PreOfferListOneComponent;
  let fixture: ComponentFixture<PreOfferListOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreOfferListOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreOfferListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
