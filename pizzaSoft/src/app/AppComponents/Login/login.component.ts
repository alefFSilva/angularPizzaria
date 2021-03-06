import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { RedirectService } from "../../services/redirect.service";
import { SessionService } from "../../services/session.service";
import { RoutesPaths } from "../../Constants/routesPaths";
import { ToastsManager } from 'ng2-toastr';
import { DefaultResponse } from '../../Common/Response/DefaultResponse';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    emailControl: AbstractControl;
    passwordControl: AbstractControl;
    _response : DefaultResponse;

    private _isLogged: boolean;
    private _loginError: boolean;

    private _sessionService: SessionService;
    private _redirectService: RedirectService;
    private _toastManager: ToastsManager;

    constructor(sessionService: SessionService, redirectService: RedirectService,
        toastManager: ToastsManager, formBuilder: FormBuilder,
        viewContainerRef: ViewContainerRef) {

        this._sessionService = sessionService;
        this._redirectService = redirectService;
        this._toastManager = toastManager;

        this.loginForm = this.buildForm(formBuilder);
        this.emailControl = this.loginForm.controls['emailControl'];
        this.passwordControl = this.loginForm.controls['passwordControl'];
        this._isLogged = sessionService.isLogged;

        this._toastManager.setRootViewContainerRef(viewContainerRef);
    }

    ngOnInit() {
        if (this._isLogged) {
            this._redirectService.redirectToPath(RoutesPaths.DASHBOARD_PATH);
          }
    }

    onSubmit(formResult: any): void {
        const email  = formResult.emailControl;
        const password = formResult.passwordControl;

        this._sessionService.login(email, password)
            .subscribe((result: DefaultResponse) => {
                this._response = result;

                if (this._response.success) {
                    this._isLogged = this._sessionService.isLogged;
                    this._redirectService.redirectToPath(RoutesPaths.DASHBOARD_PATH);
                } else {
                    this._loginError = true;
                    this.showAccessDeniedError();
                }
            });
    }

    private emailValidator(emailControl: FormControl): {[s: string]: boolean} {
        if (!emailControl.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return {invalidEmail: true};
        }
    }

    private showAccessDeniedError (){
        this._toastManager.error("Verifique seu E-mail e Senha.", "Dados Inválidos");
    }

    private buildForm(formBuilder: FormBuilder): FormGroup{
        return formBuilder.group({
            'emailControl': ['', Validators.compose([
                Validators.required, this.emailValidator
            ])],
            'passwordControl': ['', Validators.required]
    })}
}
