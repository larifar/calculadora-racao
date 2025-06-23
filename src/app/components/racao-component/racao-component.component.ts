import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-racao-component',
  standalone: true,
  imports: [],
  templateUrl: './racao-component.component.html',
  styleUrl: './racao-component.component.css'
})
export class RacaoComponentComponent {
  @Input() name : String ="";
  @Input() price: number =0;
  @Input() quantity: number=0;
  @Input() beneficio: String="";
  @Input() duracao: number=0;
  @Input() pricePortion: number=0;

}
