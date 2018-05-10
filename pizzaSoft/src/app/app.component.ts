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
  private _router: Router;
  private _isLogged: boolean;
  private _redirectService: RedirectService;

  constructor(router: Router,
              sessionService: SessionService,
              redirectService: RedirectService) {
    this._router = router;
    this._isLogged = sessionService.getCurrentUser() != null;
    this._redirectService = redirectService;
  }

  ngOnInit() {
    if (!this._isLogged) {
      this._redirectService.redirectToPath(RoutesPaths.LOGIN_PATH);
    } else {
      this._redirectService.redirectToPath(RoutesPaths.HOME_PATH);
    }
  }
}
