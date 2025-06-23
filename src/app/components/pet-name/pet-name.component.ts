import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-name',
  standalone: true,
  imports: [],
  templateUrl: './pet-name.component.html',
  styleUrl: './pet-name.component.css'
})
export class PetNameComponent {
  @Input() name : String ="";
  @Input() portion : number = 0;

}
