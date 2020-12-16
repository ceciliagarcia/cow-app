import { Component, OnInit } from '@angular/core';
import {CowsService, Cow} from '../../services/cows.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cows',
  templateUrl: './cows.component.html'
})
export class CowsComponent implements OnInit {

  cows: Cow[] = [];


  constructor( private _cowsService: CowsService, private router:Router) {
   
   }

  ngOnInit(): void {
    this.cows = this._cowsService.getCows();
    //console.log(this.cows);
  }

  
  verCow( idx:number ){
    this.router.navigate( ['/cow',idx] );
  }

}
