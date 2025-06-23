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
  racoes: Racao[] = []
  dados = {marcasTotal: 1, petsTotal: 1, porcaoTotal: 100, porcaoDiaMedia: 0.7}

  addPet(pet:Pet){
    this.pets.push(pet);
    this.racoes.forEach(racao => {
      this.updateRacao(racao);
    });
  }

  addRacao(racao: Racao){
    this.updateRacao(racao)
    this.racoes.push(racao);
    this.updateBeneficio()
  }

  updateRacao(racao : Racao){
    let portionTotal = this.calculatePortionTotal()
    let duration = this.calculator.calculateDurationRacao(portionTotal, racao.quantity)
    let portionPrice = this.calculator.calculatePriceByPortion(portionTotal, racao.price, racao.quantity)
    racao.portionPrice = portionPrice
    racao.duration = duration
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

  calculateTotalMarcas():number{
    return this.racoes.length;
  }

  calculatePorcaoMedia():number{
    let porcoes : number[] = []
    this.racoes.forEach(r =>{
      porcoes.push(r.portionPrice)
    })
    return this.racoes.length==0? 0 : this.calculator.calculatePortionMediaByDay(porcoes)
  }

  getCheaper() : Racao{
    return this.racoes.reduce((menor, atual) =>
      atual.portionPrice < menor.portionPrice ? atual : menor
    )
  }

  getLongestDuration() : Racao{
    return this.racoes.reduce((maior, atual) =>
      atual.duration > maior.duration ? atual : maior
    )
  }

  updateBeneficio(){
    if(this.racoes.length >= 2){
      this.racoes.forEach(r => r.beneficio = '');
      const cheaper = this.getCheaper()
      const longest = this.getLongestDuration()
      cheaper.beneficio = "+econômica"
      if(cheaper !== longest){
        longest.beneficio = "dura+"
      }
    }
  }

  excluirPet(index: number){
    this.pets.splice(index,1);
  }

  excluirRacao(index: number){
    this.racoes.splice(index,1);
  }

}
