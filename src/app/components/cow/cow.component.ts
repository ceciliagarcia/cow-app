import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CowsService} from '../../services/cows.service';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styles: [
  ]
})
export class CowComponent {

  cow: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _cowsService: CowsService) { 
    this.activatedRoute.params.subscribe( params => {
     
      this.cow = this._cowsService.getCow(params ['id']);
    });
  }

 

}
