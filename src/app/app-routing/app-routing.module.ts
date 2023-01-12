import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StrengthBarComponent } from '../strength-bar/strength-bar.component';

const routes: Routes = [
  {
    path: 'strength-bar',
    component: StrengthBarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
