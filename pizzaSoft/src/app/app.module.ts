import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Router, RouterModule} from '@angular/router';
import { routes } from './Constants/routes';
import { RedirectService } from './services/redirect.service';
import { LoginComponent } from './AppComponents/Login/login.component';
import { HomeComponent } from './AppComponents/Home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [],
  providers: [ RedirectService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
