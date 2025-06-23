import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoComponentComponent } from './racao-component.component';

describe('RacaoComponentComponent', () => {
  let component: RacaoComponentComponent;
  let fixture: ComponentFixture<RacaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacaoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RacaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
