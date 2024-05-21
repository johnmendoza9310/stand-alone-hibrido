import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeTwoComponent } from './molecule-two.component';

describe('MoleculeTwoComponent', () => {
  let component: MoleculeTwoComponent;
  let fixture: ComponentFixture<MoleculeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculeTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoleculeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
