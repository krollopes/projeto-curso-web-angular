import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor( public _is: InformationService,  private router: Router ) { }

  buscar_product( termino: string) {

    this.router.navigate(['buscar', termino])
  }

}
