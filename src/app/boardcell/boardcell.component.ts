import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boardcell',
  templateUrl: './boardcell.component.html',
  styleUrls: ['./boardcell.component.scss']
})
export class BoardcellComponent implements OnInit {
  @Input() label: string='' ;
  
  constructor() {
    //this.label=label;
  }

  ngOnInit(): void {
  }

}
