import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { SoccerTeamModule } from './soccer-team/soccer-team.module';
import { TournamentsModule } from './tournaments/tournaments.module';

import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    SoccerTeamModule,
    TournamentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
