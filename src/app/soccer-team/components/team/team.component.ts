import { Component } from '@angular/core';

@Component({
  selector: 'team-component',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  public teamName:string = 'Barcelona S. C.';
  public teamFoundation:number = 1990;
  public teamLeague:string = 'Barcelona S. C.';
  public teamCategory:string = 'Barcelona S. C.';
  public teamValue:number = 12;
  public menor1990:boolean = this.teamFoundation<1990;

  //crear propiedad por medio get
  get teamAge():number{
    return 2023-this.teamFoundation;
  }
  //método get - no reconocido como propiedad
  public getCapitalizedName():string {
    return `${this.teamName.toUpperCase()} - ${this.teamValue}`;
  }
  changeTeamName():void {
    this.teamName = 'New Name';
  }

  changeTeamValue():void {
    this.teamValue = Math.floor(Math.random()*50);
  }

}
