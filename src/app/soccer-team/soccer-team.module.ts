import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './components/team/team.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    TeamComponent,
    ListComponent
  ],
  exports: [
    TeamComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SoccerTeamModule { }


