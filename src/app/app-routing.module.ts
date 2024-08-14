import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './views/system/system.component';
import { PatientsComponent } from './views/patients/patients.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { PriceListComponent } from './views/price-list/price-list.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  { path: '', component: SystemComponent },
  { path: 'system', component: SystemComponent },
  { path: 'priceList', component: PriceListComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'setting', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
