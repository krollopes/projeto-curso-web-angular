import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any [] = [];
  carregando: boolean = false;

  constructor( private http: Http ) {

    this.carregar_products();

  }

  public carregar_products() {

    this.carregando = true;

      this.http.get('https://pagina-web-angular.firebaseio.com/productos_idx.json')
          .subscribe( res => {

            console.log(res.json());
            this.carregando = false;
            this.products = res.json();
        });
  }

}

