import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";
import { RedirectService } from "../../services/redirect.service";
import { RoutesPaths } from "../../Constants/routesPaths";

@Component({
    selector: "home.component",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"]
})
export class HomeComponent implements OnInit{
    private _userEmail: string;
    private _sessionService: SessionService;
    private _redirectService: RedirectService;

    constructor(sessionService:SessionService,
        redirectService: RedirectService){

        this._userEmail = localStorage.getItem('userName');
        this._sessionService = sessionService;
        this._redirectService = redirectService;
    }

    ngOnInit(){
        if(!this._userEmail){
            this._redirectService.redirectToPath(RoutesPaths.LOGIN_PATH);
        }
    }

    doLogout():void{
        this._sessionService.logout();
        this._redirectService.redirectToPath(RoutesPaths.LOGIN_PATH);
    }
}