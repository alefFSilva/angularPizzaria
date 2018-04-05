import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms"
import { SessionService } from "../../services/session.service";


@NgModule({
    declarations: [LoginComponent],
    imports: [ FormsModule ],
    exports: [ LoginComponent],
    providers: [ SessionService ]
})
export class UserModule {}