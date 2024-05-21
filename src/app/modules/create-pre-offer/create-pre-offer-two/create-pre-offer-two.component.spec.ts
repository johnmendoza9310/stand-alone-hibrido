import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePreOfferTwoComponent } from './create-pre-offer-two.component';

describe('CreatePreOfferTwoComponent', () => {
  let component: CreatePreOfferTwoComponent;
  let fixture: ComponentFixture<CreatePreOfferTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePreOfferTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePreOfferTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
