import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UserModule } from './Modules/UserModule/user.module';
import { HomeModule } from './Modules/UserModule/home.module';

import { AppComponent } from './app.component';
import { Router, RouterModule} from '@angular/router';
import { routes } from './Constants/routes';
import { RedirectService } from './services/redirect.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
  providers: [ RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
