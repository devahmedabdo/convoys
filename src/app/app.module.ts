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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AlazharyComponent } from './views/alazhary/alazhary.component';
import { SystemComponent } from './views/system/system.component';
import { PatientsComponent } from './views/patients/patients.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { ExpensesComponent } from './views/expenses/expenses.component';
import { PriceListComponent } from './views/price-list/price-list.component';
import { HeaderComponent } from './layout/header/header.component';
// import { ModalModule } from 'ngx-modal';

// import { BlogsComponent } from './views/blogs/blogs.component';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { fas } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    AlazharyComponent,
    SystemComponent,
    PatientsComponent,
    PaymentsComponent,
    ExpensesComponent,
    PriceListComponent,
    HeaderComponent,
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
    ModalDialogModule.forRoot(),
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
