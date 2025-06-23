import { CalculatorService } from './services/calculator.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetComponentComponent } from "./components/pet-component/pet-component.component";
import { PetNameComponent } from "./components/pet-name/pet-name.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FormRacaoComponent } from "./components/form-racao/form-racao.component";
import { RacaoComponentComponent } from "./components/racao-component/racao-component.component";
import { DataCompononetComponent } from "./components/data-compononet/data-compononet.component";
import { Pet } from './interfaces/pet';
import { Racao } from './interfaces/racao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PetComponentComponent, PetNameComponent, NavBarComponent, FormRacaoComponent, RacaoComponentComponent, DataCompononetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private calculator: CalculatorService){}

  title = 'project-calculadora-racao';
  pets: Pet[] = [];
  racoes: Racao[] = [{name: "Royal", price: 50, quantity: 5, beneficio: "+econômica", duration:0, portionPrice:0}]
  dados = {marcasTotal: 1, petsTotal: 1, porcaoTotal: 100, porcaoDiaMedia: 0.7}

  addPet(pet:Pet){
    this.pets.push(pet);
  }

  addRacao(racao: Racao){
    let portionTotal = this.calculatePortionTotal()
    let duration = this.calculator.calculateDurationRacao(portionTotal, racao.quantity)
    let portionPrice = this.calculator.calculatePriceByPortion(portionTotal, racao.price, racao.quantity)
    racao.portionPrice = portionPrice
    racao.duration = duration
    this.racoes.push(racao);
  }

  calculateTotalPets() : number{
    return this.pets.length;
  }

  calculatePortionTotal(): number{
    let porcaoTotal =0;
    this.pets.forEach(pet => {
      porcaoTotal+=pet.portion
    });
    return porcaoTotal;
  }

}
