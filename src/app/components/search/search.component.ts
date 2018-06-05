import { Component } from '@angular/core';

import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor( public _is: InformationService ) { }

}
