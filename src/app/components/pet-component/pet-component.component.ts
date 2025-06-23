import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { Pet } from '../../interfaces/pet';

@Component({
  selector: 'app-pet-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pet-component.component.html',
  styleUrl: './pet-component.component.css'
})
export class PetComponentComponent {
  name= "";
  portion = 0;

  @Output() petCreated = new EventEmitter<Pet>()

  submitForm(form: NgForm){
    this.petCreated.emit({name: this.name, portion:this.portion})
    this.name=""
    this.portion=0

    form.resetForm()
  }

}
