import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-summary',
  templateUrl: './property-summary.component.html',
  styleUrls: ['./property-summary.component.css']
})
export class PropertySummaryComponent implements OnInit {

  @Input()
  properties: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.properties);
  }

}
