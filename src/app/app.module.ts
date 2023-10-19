import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SwiperModule } from 'swiper/angular';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AlazharyComponent } from './views/alazhary/alazhary.component';
import { CardComponent } from './views/card/card.component';
import { SystemComponent } from './views/system/system.component';
import { PatientsComponent } from './views/patients/patients.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { ExpensesComponent } from './views/expenses/expenses.component';

// import { BlogsComponent } from './views/blogs/blogs.component';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlazharyComponent,
    CardComponent,
    SystemComponent,
    PatientsComponent,
    PaymentsComponent,
    ExpensesComponent,
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
    ImageCropperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
