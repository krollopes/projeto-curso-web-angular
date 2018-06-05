import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

  products: any [] = [];
  products_filtrado: any [] = [];
  carregando: boolean = true;

  constructor( private http: Http ) {

    this.carregar_products();

  }

  public buscar_product( termino: string ){

    console.log('Buscando produto');
    console.log(this.products.length);

    this.products.forEach( prod => {

      console.log(prod);

    });
  }


  public carregar_product( cod: string ) {
    return this.http.get(`https://pagina-web-angular.firebaseio.com/products/${cod}.json`);
  }

  public carregar_products() {

    this.carregando = true;

      this.http.get('https://pagina-web-angular.firebaseio.com/products_idx.json')
          .subscribe( res => {

            // console.log(res.json());

            this.carregando = false;
            this.products = res.json();
        });
  }

}

