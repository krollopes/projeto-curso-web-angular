import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

  products: any [] = [];
  products_filtrado: any [] = [];
  carregando: boolena = true;

  constructor( private http: Http ) {

    this.carregar_products();

  }

  public buscar_product( termino: string ) {

    if ( this.products.length === 0 ) {
      this.carregar_products()
          .then( () => {
          this.filtrar_products(termino);
        });
    } else {
      this.filtrar_products(termino);
    }
  }

  private filtrar_products(termino: string) {

    this.products_filtrado = [];

    termino = termino.toLowerCase();

    this.products.forEach( prod => {

      if ( prod.categoria.indexOf(termino) >= 0 ||
           prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.products_filtrado.push(prod);
      }

    });
  }


  public carregar_product( cod: string ) {
    return this.http.get(`https://pagina-web-angular.firebaseio.com/products/${cod}.json`);
  }

  public carregar_products() {

    this.carregando = true;

    const promesa = new Promise((resolve, reject) => {

      this.http.get('https://pagina-web-angular.firebaseio.com/products_idx.json')
          .subscribe( res => {

            this.carregando = false;
            this.products = res.json();
            resolve();
        });
    });

    return promesa;

  }

}

