import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlazharyComponent } from './views/alazhary/alazhary.component';
import { CardComponent } from './views/card/card.component';
import { SystemComponent } from './views/system/system.component';
import { PatientsComponent } from './views/patients/patients.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { ExpensesComponent } from './views/expenses/expenses.component';

const routes: Routes = [
  { path: '', component: SystemComponent },
  { path: 'system', component: SystemComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'omnia', component: AlazharyComponent },
  { path: 'a', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
