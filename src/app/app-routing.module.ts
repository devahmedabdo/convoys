import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlazharyComponent } from './views/alazhary/alazhary.component';
import { CardComponent } from './views/card/card.component';

const routes: Routes = [
  { path: '', component: AlazharyComponent },
  { path: 'a', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
