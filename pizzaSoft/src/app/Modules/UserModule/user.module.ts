import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms"
import { SessionService } from "../../services/session.service";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [LoginComponent],
    imports: [ 
        ReactiveFormsModule,
        BrowserModule 
    ],
    exports: [ LoginComponent],
    providers: [ SessionService ]
})
export class UserModule {}