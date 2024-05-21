import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomOneComponent } from './atom-one.component';

describe('AtomOneComponent', () => {
  let component: AtomOneComponent;
  let fixture: ComponentFixture<AtomOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
