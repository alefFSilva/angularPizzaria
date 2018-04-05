import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { RedirectService } from "../../services/redirect.service";
import { SessionService } from "../../services/session.service";
import { RoutesPaths } from "../../Constants/routesPaths";


@Component({
    selector: 'app-login-component',
    templateUrl: 'app.login.component.html',
    styleUrls: ['app.login.css']
})
export class LoginComponent implements OnInit {
    private _email: string;
    private _password: string;
    private _isLogged: boolean;

    private _sessionService: SessionService;
    private _redirectService: RedirectService;

    constructor(sessionService: SessionService, redirectService: RedirectService) {
        this._sessionService = sessionService;
        this._redirectService = redirectService;
    }

    ngOnInit() {
        if (this._isLogged) {
            this._redirectService.redirectToPath(RoutesPaths.HOME_PATH);
        }
    }

    onSubmit(formResult: FormGroup): void {
        this._email = formResult.controls['email'].value;
        this._password = formResult.controls['password'].value;

        this._isLogged = this._sessionService.login(this._email, this._password);

        if (this._isLogged) {
            this._redirectService.redirectToPath(RoutesPaths.HOME_PATH);
            this._isLogged = true;
        }
    }
}