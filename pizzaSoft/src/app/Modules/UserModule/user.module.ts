import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { LoginComponent } from "./login.component";
import { SessionService } from "../../services/session.service";
import { ReactiveFormsModule } from "@angular/forms"

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [LoginComponent],
    imports: [ 
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        ToastModule.forRoot()
    ],
    exports: [ LoginComponent],
    providers: [ SessionService ]
})
export class UserModule {}