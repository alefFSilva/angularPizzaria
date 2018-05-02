import { Injectable } from "@angular/core";
import { User } from "../Models/user"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DefaultResponse } from "../Common/Response/DefaultResponse";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SessionService {
    _currentUser: User;
    _httpClient: HttpClient;
    _authServiceURL = "http://192.168.0.105/Auth/DoLogin";
    _response = new DefaultResponse();

    constructor(httpClient: HttpClient) {
        this._currentUser = new User();
        this._httpClient = httpClient;
     }

    login(email: string, password: string): Observable<DefaultResponse> {
        let authHeader = this.getAuthHeader(email, password);

        return this._httpClient.get(this._authServiceURL, { headers: authHeader })
            .map((response: DefaultResponse) => {
                this._response.success = response.success;
                this._currentUser.Email = email;
                this.saveCurrentUser(this._currentUser);
                return this._response;
            })
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

    private getAuthHeader(email :string, password:string):HttpHeaders {
        return new HttpHeaders({ 'Authorization': 'Basic ' + btoa(email + ':' + password) });
    }
}