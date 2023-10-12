import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlazharyComponent } from './views/alazhary/alazhary.component';

const routes: Routes = [{ path: '', component: AlazharyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
