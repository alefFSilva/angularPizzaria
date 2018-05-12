import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class RedirectService {
    _router: Router;

    constructor(router: Router){
        this._router = router;
    }

    redirectToPath(path: string):void{
        this._router.navigate([path]);
    }

    retirectToLogin(): void {
        // this._router.navigate(['/dashBoard', {outlets: {'bio': [id]}}]);
    }
}