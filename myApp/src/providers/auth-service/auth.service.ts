import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'ionic-angular/util/util';
import { TOKEN, CURRENT_USER } from '../utils/constants';

@Injectable() 
export class AuthServiceProvider {
    
    currentUser: Object;
    
    constructor(public http: HttpClient, private storage: Storage) {
        
    }
    
    public login(credentials) : Observable<boolean> {
        if (!credentials || !credentials.login || !credentials.senha) {
            return Observable.throw("Digite usuario e senha.");
        } else {
            return Observable.create(observable => {
                let access : boolean;
                const uri = 'https://curso-ferias.herokuapp.com';
                this.http
                .get(`${uri}/usuario?login=${
                    credentials.login
                }&senha=${
                    credentials.senha
                }`)
                .subscribe( res => {
                    if (res[0]) {
                        console.log(res[0]);
                        this.currentUser = res[0];
                        access = true;
                        localStorage.setItem(TOKEN, 'OK');
                        this.storage.set(CURRENT_USER, res[0]);
                    } else {
                        access = false;
                    }
                    
                    if (!isUndefined(access)) {
                        observable.next(access);
                        observable.complete();
                    }
                    
                });  
                
            });
        }
    }
}
