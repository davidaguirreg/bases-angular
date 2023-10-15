import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
    <hr>
    <h1>Contador Componente:</h1>
    <h2>Contador: {{counter}}</h2>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {

  public counter:number = 0;

  constructor() { }

  increaseBy( value:number ):void {
    this.counter+=value;
  }

  resetCounter(){
    this.counter=0;
  }
}
