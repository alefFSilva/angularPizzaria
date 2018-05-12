import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { RedirectService } from "../../services/redirect.service";
import { RoutesPaths } from "../../Constants/routesPaths";
import { Routes } from "@angular/router";
import { HomeComponent } from "../Home/home.component";


@Component({
    selector: 'dashboard-component',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashBoardComponent implements OnInit{
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
        this._redirectService.redirectToPath(RoutesPaths.HOME_PATH);
    }

    doLogout():void{
        this._sessionService.logout();
        this._redirectService.redirectToPath(RoutesPaths.LOGIN_PATH);
    }
}