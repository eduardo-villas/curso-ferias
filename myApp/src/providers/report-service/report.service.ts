import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'ionic-angular/util/util';
import { TOKEN, CURRENT_USER } from '../utils/constants';
// import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable() 
export class ReportServiceProvider {
    
    user : Object;
    data : Array<any> = [];
    
    constructor(private storage: Storage,
        private http: Http) {
            
        }
        
        public getToken() : any {
            return localStorage.getItem(TOKEN);
        }
        
        public getCurrentUser() : Object {
            return this.storage.get(CURRENT_USER);
        }
        
        public getData(id, disciplinas: Array<any>): Promise<Array<any>> {
            
            return new Promise((resolve, reject) => {
                const uri = 'https://curso-ferias.herokuapp.com';
                let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
                let options = new RequestOptions({headers:headers});
                this.http.get(`${uri}/presenca?usuario=${id}&disciplina=${disciplinas[0]}`, options)
                .subscribe( res => {
                    this.data.push(res.json());                
                    this.http.get(`${uri}/presenca?usuario=${id}&disciplina=${disciplinas[1]}`, options)
                    .subscribe( res => {
                        this.data.push(res.json());                
                        this.http.get(`${uri}/presenca?usuario=${id}&disciplina=${disciplinas[2]}`, options)
                        .subscribe( res => {
                            this.data.push(res.json());
                            resolve([{
                                title: 'Angular',
                                detail: 'Presenças: 0',
                                logo: 'logo-angular',
                                icon: 'ios-add-circle-outline', 
                                showDetail: true
                            },
                            {
                                title: 'Ionic',
                                detail: 'Presenças: 0',
                                logo: 'ios-ionic-outline',
                                icon: 'ios-add-circle-outline', 
                                showDetail: false
                            },
                            {
                                title: 'Rest',
                                detail: 'Presenças: 0',
                                logo: '',
                                icon: 'ios-add-circle-outline', 
                                showDetail: false
                            }]);
                        });
                    });
                });


    });
}

}
