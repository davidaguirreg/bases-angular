import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'Este es el título de la aplicación';
  public counter:number = 10;

  increaseBy( value : number ) : void {
    this.counter+=value;
  }
  resetCounter(){
    this.counter=10;
  }
}
