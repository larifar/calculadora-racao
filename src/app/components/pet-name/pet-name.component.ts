import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pet-name',
  standalone: true,
  imports: [],
  templateUrl: './pet-name.component.html',
  styleUrl: './pet-name.component.css'
})
export class PetNameComponent {
@Output() excluir = new EventEmitter<number>();

  @Input() index!: number;
  @Input() name : String ="";
  @Input() portion : number = 0;

}
