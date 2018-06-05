import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent {

  constructor( private _ps: ProductsService ) {
    
  }


}
