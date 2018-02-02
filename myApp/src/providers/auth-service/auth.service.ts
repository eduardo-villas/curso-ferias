import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'ionic-angular/util/util';
import { TOKEN, CURRENT_USER, URI_BASE, IS_AUTORIZED, TRUE } from '../utils/constants';
import { HttpParams } from '@angular/common/http';
import { UserServiceProvider } from '../user-service/user.service';

@Injectable()
export class AuthServiceProvider {

    currentUser: Object;

    constructor(public http: HttpClient, private storage: Storage, private userService: UserServiceProvider) {

    }

    public buildToken(credentials): any {
        const token = btoa('mobile:alunos');
        return token;
    }

    public login(credentials): Observable<any> {

        const token = this.buildToken(credentials);

        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${token}`
            })
        };

        const params = new HttpParams()
            .set('username', credentials.login)
            .append('password', credentials.senha)
            .append('grant_type', 'password');

        return this.http.post(`${URI_BASE}/oauth/token`, params.toString(), httpOptions);

    }

    public isAutorized(): boolean {
        let returnValue = localStorage.getItem(IS_AUTORIZED) === TRUE;
        console.log(returnValue);
        return returnValue;
    }

    public saveAccessData(res): void {
        localStorage.setItem(IS_AUTORIZED, TRUE);
        this.currentUser = res[CURRENT_USER];
        this.storage.set(CURRENT_USER, res);
        this.userService.setToken(res[TOKEN]);
    }
    getHeader(): Object {
        let credentials = this.currentUser;
        const token = this.buildToken(credentials);

        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${token}`
            })
        };
        return httpOptions;
    }

}
