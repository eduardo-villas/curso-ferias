import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import uuid from 'uuid';
import { URI_BASE } from '../utils/constants';
import { AuthServiceProvider } from '../auth-service/auth.service';

@Injectable()
export class ScannerServiceProvider {
    constructor(public http: HttpClient, private authService: AuthServiceProvider) { }

    postData(idAluno, idDisciplina) {
        let options = this.authService.getHeader();
        const uri = URI_BASE;
        const body = {
            dia: new Date(),
            idDisciplina: idDisciplina,
            usuario: idAluno
        }
        return this.http.put(`${uri}/frequencia/${idDisciplina}/${idAluno}`, body, options);
    }
}