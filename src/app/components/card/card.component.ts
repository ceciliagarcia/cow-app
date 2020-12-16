import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() cow: any = {};
  @Input() index: number;
  @Output() selectedCow: EventEmitter<number>;

  constructor(private router:Router) { 
    this.selectedCow = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verCow(  ){
    this.router.navigate( ['/cow', this.index] );
   //this.selectedCow.emit(this.index);
  }

}
