import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlazharyComponent } from './views/alazhary/alazhary.component';
import { CardComponent } from './views/card/card.component';
import { SystemComponent } from './views/system/system.component';
import { PatientsComponent } from './views/patients/patients.component';
import { PaymentsComponent } from './views/payments/payments.component';

const routes: Routes = [
  { path: '', component: AlazharyComponent },
  { path: 'system', component: SystemComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'a', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
