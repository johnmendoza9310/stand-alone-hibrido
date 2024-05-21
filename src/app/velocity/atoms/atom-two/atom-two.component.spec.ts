import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomTwoComponent } from './atom-two.component';

describe('AtomTwoComponent', () => {
  let component: AtomTwoComponent;
  let fixture: ComponentFixture<AtomTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
