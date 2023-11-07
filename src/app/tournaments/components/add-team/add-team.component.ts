import { Component, EventEmitter, Output } from '@angular/core';
import { Tournaments } from '../../interfaces/tournaments.interface';
import { v4 as uuid } from "uuid";
@Component({
  selector: 'app-tournaments-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent {
  public tournamentAdd: Tournaments = {
    name: '',
    participants: 0
  }
  @Output()
  public onAddTournament:EventEmitter<Tournaments> = new EventEmitter();
  public emitirTorneo():void {
    // debugger;
    this.onAddTournament.emit({...this.tournamentAdd});
    this.tournamentAdd.id='';
    this.tournamentAdd.name='';
    this.tournamentAdd.participants=0;
  }
}
