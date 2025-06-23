import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculateDurationRacao(portion: number, quantity: number) : number{
    console.log("calculando duração porção")
    return Math.floor((quantity * 1000) / portion);
  }

  calculatePortionMediaByDay(medias: number[]) : number{
    let soma = 0;
    medias.forEach(e => {
      soma+= e
    })
    return Number((soma / medias.length).toFixed(3));
  }

  calculatePriceByPortion(portion: number, price: number, quantity: number) : number{
    let priceByGram = price / (quantity * 1000);
    return Number((priceByGram * portion).toFixed(3));
  }
}
