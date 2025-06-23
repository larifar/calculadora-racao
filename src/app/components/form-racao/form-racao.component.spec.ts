import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRacaoComponent } from './form-racao.component';

describe('FormRacaoComponent', () => {
  let component: FormRacaoComponent;
  let fixture: ComponentFixture<FormRacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
