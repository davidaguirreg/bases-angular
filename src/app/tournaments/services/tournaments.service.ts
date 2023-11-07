import { Injectable } from '@angular/core';
import { Tournaments } from '../interfaces/tournaments.interface';
import {v4 as uuid } from 'uuid'
@Injectable({ providedIn: 'root' })
export class TournamentsService {
  public tournamentsList: Tournaments[] = [{
    id: uuid(),
    name: 'FA Cup',
    participants: 16
  }, {
    id: uuid(),
    name: 'BBVA League',
    participants: 32
  }, {
    id: uuid(),
    name: 'Bundes League',
    participants: 48
  }];

  onDeletedTournament(id: string): void {
    //filtra la lista y solamente mantiene los valores que cumplen la condicion
    this.tournamentsList = this.tournamentsList.filter(tournament => tournament.id !== id);
  }
  onAddedTournament(addedTournament: Tournaments): void {
    const newTournament = {
      ...addedTournament,
      id: uuid()
    }
    console.log({newTournament});
    this.tournamentsList.push(newTournament);
    // console.log('Main Page');
    // console.log("Added Tournament", {addedTournament});
  }

}
