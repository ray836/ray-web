import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChallengesComponent} from "./challenges/challenges.component";

const APP_ROUTS: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'challenges', component: ChallengesComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTS);
