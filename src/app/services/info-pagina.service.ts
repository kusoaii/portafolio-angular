import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : InfoPagina = {};
  cargada = false;
  equipo : any[] = [];

  constructor(
    private _http : HttpClient
  ) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    console.log('ok');
    // leer el archivo json
    this._http.get('assets/data/data-pagina.json').subscribe(
      (response : InfoPagina) =>{
        this.cargada = true;
        this.info = response;
        console.log(response);
      },
      error =>{

      }

    );
  }

  private cargarEquipo(){
    this._http.get('https://angular-html-6887a.firebaseio.com/equipo.json').subscribe(
      (response : any) =>{
        this.equipo = response
        console.log(response);
      }
    );
  }

}
