import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetNameComponent } from './pet-name.component';

describe('PetNameComponent', () => {
  let component: PetNameComponent;
  let fixture: ComponentFixture<PetNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
