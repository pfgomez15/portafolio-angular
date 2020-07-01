import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaI } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaI = {};
  cargada = false;
  equipo: any[] = []; 

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //leer archivo json
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPaginaI) => {
        this.cargada = true;
        this.info = resp;
        //console.log(resp);
      })
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-83d43.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) => {
        this.equipo = resp;
        //console.log(resp);
    })
  }
}
