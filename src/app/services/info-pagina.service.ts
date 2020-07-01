import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaI } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:InfoPaginaI={};
  cargada = false;
  constructor(private http: HttpClient) {
    //leer archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfoPaginaI)=>{
      this.cargada=true;
      this.info=resp;
      console.log(resp);
    })
   }
}
