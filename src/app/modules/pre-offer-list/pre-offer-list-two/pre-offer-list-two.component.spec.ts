import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOfferListTwoComponent } from './pre-offer-list-two.component';

describe('PreOfferListTwoComponent', () => {
  let component: PreOfferListTwoComponent;
  let fixture: ComponentFixture<PreOfferListTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreOfferListTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreOfferListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
