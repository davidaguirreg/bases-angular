import { Component } from '@angular/core';
import { Tournaments } from '../interfaces/tournaments.interface';
import { TournamentsService } from '../services/tournaments.service';

@Component({
  selector: 'app-tournament-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor(
    private tournamentsService: TournamentsService
  ) {}

  get tournaments() : Tournaments[] {
    return [...this.tournamentsService.tournamentsList];
  }

  onDeleteTournament( id : string ) : void {
    this.tournamentsService.onDeletedTournament(id);
  }

  onAddedTournament( tournamentNew:Tournaments ) : void {
    this.tournamentsService.onAddedTournament(tournamentNew);
  }

}
