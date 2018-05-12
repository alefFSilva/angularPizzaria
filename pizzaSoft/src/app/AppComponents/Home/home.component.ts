import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";
import { RedirectService } from "../../services/redirect.service";
import { RoutesPaths } from "../../Constants/routesPaths";

@Component({
    selector: "home-component",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"]
})
export class HomeComponent{
}