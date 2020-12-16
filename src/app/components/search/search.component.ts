import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CowsService } from '../../services/cows.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {


  cows:any[] = []
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
    private _cowsService: CowsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.cows = this._cowsService.searchCows( params['termino'] );
      console.log( this.cows );
    });
  }

}
