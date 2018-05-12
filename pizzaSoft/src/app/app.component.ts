import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './services/session.service';
import { RedirectService } from './services/redirect.service';
import { RoutesPaths } from './Constants/routesPaths';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private router: Router;
  private isLogged: boolean;
  private redirectService: RedirectService;

  constructor(_router: Router, _sessionService: SessionService, _redirectService: RedirectService) {
    this.router = _router;
    this.isLogged = _sessionService.isLogged;
    this.redirectService = _redirectService;
  }

  ngOnInit() {
    if (!this.isLogged) {
      this.redirectService.redirectToPath(RoutesPaths.LOGIN_PATH);
    }
  }
}
