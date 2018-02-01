import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'ionic-angular/util/util';
import { TOKEN, CURRENT_USER } from '../utils/constants';

@Injectable() 
export class UserServiceProvider {
    
    user : Object;

    constructor(private storage: Storage) {
        
    }
    
    public setToken(token) {
        localStorage.setItem(TOKEN, token);
    }

    public getToken() : any {
        return localStorage.getItem(TOKEN);
    }

    public getCurrentUser() : Promise<any> {
        return this.storage.get(CURRENT_USER);
    }

}
