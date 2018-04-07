import { Injectable } from "@angular/core";
import { User } from "../Models/user"

@Injectable()
export class SessionService {
    _currentUser: User

    constructor() {
        this._currentUser = new User();
     }

    login(email: string, password: string): boolean {
        var result = false;
        if (email == 'alefs93@gmail.com' && password == '123') {
            result = true;
            this._currentUser.Email = email;
            this.saveCurrentUser(this._currentUser);
        }
        return result;
    }

    logout():void{
        this.removeCurrentUser();
    }

    private saveCurrentUser(user: User): void {
        localStorage.setItem('userName', user.Email);
    }

    private removeCurrentUser():void{
        localStorage.removeItem('userName');
    }

    getCurrentUser():User{
        return this._currentUser;
    }

}