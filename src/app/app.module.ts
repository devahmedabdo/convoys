import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import { SwiperModule } from 'swiper/angular';

import { HttpClientModule } from '@angular/common/http';

import { SystemComponent } from './views/system/system.component';
import { PatientsComponent } from './views/patients/patients.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { PriceListComponent } from './views/price-list/price-list.component';
import { HeaderComponent } from './layout/header/header.component';
// import { ModalModule } from 'ngx-modal';

// import { BlogsComponent } from './views/blogs/blogs.component';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SettingsComponent } from './views/settings/settings.component';
@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    PatientsComponent,
    PaymentsComponent,
    PriceListComponent,
    HeaderComponent,
    SettingsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    // ModalModule,
    // ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(lib: FaIconLibrary) {
    lib.addIconPacks(fas);
  }
}
