import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './_shared/modules/shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { StartPageModule } from './start-page/start-page.module';
import {HttpClientModule} from '@angular/common/http';
import {ErrorInterceptorProvider} from './_shared/interceptors/error.interceptor';
import {JwtInterceptorProvider} from './_shared/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModule,
    CustomerModule,
    EmployeeModule,
    StartPageModule,
    HttpClientModule
  ],
  providers: [
    ErrorInterceptorProvider,
    JwtInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
