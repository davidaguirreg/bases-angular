import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddTeamComponent } from './components/add-team/add-team.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddTeamComponent
  ],
  imports: [

  ],
  exports:[
    MainPageComponent
  ]
})
export class TournamentsModule { }
