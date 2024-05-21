import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeOneComponent } from './molecule-one.component';

describe('MoleculeOneComponent', () => {
  let component: MoleculeOneComponent;
  let fixture: ComponentFixture<MoleculeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculeOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoleculeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
