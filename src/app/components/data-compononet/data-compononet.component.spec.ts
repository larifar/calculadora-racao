import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCompononetComponent } from './data-compononet.component';

describe('DataCompononetComponent', () => {
  let component: DataCompononetComponent;
  let fixture: ComponentFixture<DataCompononetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCompononetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataCompononetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
