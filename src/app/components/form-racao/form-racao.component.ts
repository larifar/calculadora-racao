import { CommonModule} from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { Racao } from '../../interfaces/racao';

@Component({
  selector: 'app-form-racao',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-racao.component.html',
  styleUrl: './form-racao.component.css'
})
export class FormRacaoComponent {
  @Output() racaoCreated = new EventEmitter<Racao>()

  racao = "";
  quantity = 0;
  price =0;

  submitForm(form: NgForm){
    this.racaoCreated.emit({name : this.racao, price: this.price, quantity: this.quantity, duration: 0, beneficio:"", portionPrice:0})
    this.racao="";
    this.quantity = 0;
    this.price =0;
    form.resetForm();
  }
}
