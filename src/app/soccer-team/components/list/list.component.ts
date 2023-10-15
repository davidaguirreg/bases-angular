import { Component } from '@angular/core';

@Component({
  selector: 'teams-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public players:string[]=['Kendry Paez','Jonathan Sanchez'];
  deleteLastPlayer(): void {
    this.players.pop();
  }
}
