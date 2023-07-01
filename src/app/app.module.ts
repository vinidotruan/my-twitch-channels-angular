import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTokenInterceptor } from './interceptors/add-token.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderProfileComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
