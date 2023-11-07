import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tournaments } from '../../interfaces/tournaments.interface';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  @Input()
  public tournamentsList : Tournaments[] = [{
    name: 'Default Tournament',
    participants: 20
  }];


  onDeleteTournament( id ?: string ) : void {
    // console.log("Delete index =", index )
    if (!id) return;
    this.onDelete.emit(id);
  }
}
