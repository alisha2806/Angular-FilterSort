import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileScreeningComponent } from './profile-screening/profile-screening.component';


const routes: Routes = [
  { path: 'screening', component: ProfileScreeningComponent },
  { path: '', component: ProfileScreeningComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
