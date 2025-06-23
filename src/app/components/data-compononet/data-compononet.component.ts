import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-compononet',
  standalone: true,
  imports: [],
  templateUrl: './data-compononet.component.html',
  styleUrl: './data-compononet.component.css'
})
export class DataCompononetComponent {
@Input() porcaoTotal: number =0;
@Input() porcaoDiaMedia: number =0;
@Input() marcasTotal: number =0;
@Input() petsTotal: number =0;
}
