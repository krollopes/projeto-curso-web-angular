import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  info: any = {};
  carregado:boolean = false;
  quem_somos:boolean = false;
  equipe: any[] = [];

  constructor( public http: Http ) {

    this.carregar_info();
    this.carregar_quem_somos();

  }

  public carregar_info() {
    this.http.get('assets/data/info.pagina.json')
              .subscribe( data => {
              this.carregado = true;
              this.info = data.json();
    });
  }

  public carregar_quem_somos() {
    this.http.get('https://pagina-web-angular.firebaseio.com/equipe.json')
              .subscribe( data => {
              this.quem_somos = true;
              this.equipe = data.json();
    });
  }
}
