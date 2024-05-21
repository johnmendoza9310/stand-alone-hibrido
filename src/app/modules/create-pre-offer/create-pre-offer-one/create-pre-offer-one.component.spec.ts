import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePreOfferOneComponent } from './create-pre-offer-one.component';

describe('CreatePreOfferOneComponent', () => {
  let component: CreatePreOfferOneComponent;
  let fixture: ComponentFixture<CreatePreOfferOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePreOfferOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePreOfferOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
