import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculateDurationRacao(portion: number, quantity: number) : number{
    return (quantity * 1000) / portion;
  }

  calculatePortionMediaByDay(medias: number[]) : number{
    let soma = 0;
    medias.forEach(e => {
      soma+= e
    })
    return soma / medias.length
  }

  calculatePriceByPortion(portion: number, price: number, quantity: number){
    let priceByGram = price / (quantity * 1000);
    return priceByGram * portion;
  }
}
