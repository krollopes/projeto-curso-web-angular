import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  info: any = {};
  carregado: boolean = false;

  constructor( public http: Http ) { 

    this.http.get('assets/data/info.pagina.json')
              .subscribe( data => {
                console.log(data.json());
                this.carregado = true;
                this.info = data.json();
              })
  }
}
