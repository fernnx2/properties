import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from 'src/app/services/Property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  providers: [NgbCarouselConfig]
})
export class PropertyComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  active = 1;
  allProperties: any;
  properties: any;
  next = 0;
  load = false;
  routesImages =[];
  constructor(config: NgbCarouselConfig, private propertyService: PropertyService) {
    // configuracion inicial de carrusel
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    // obteniendo todas las propiedades de la api
    this.propertyService.findAll()
    .subscribe(resp=>{
      this.allProperties = resp;
      this.properties = resp[0];
      this.next +=1;
      this.load = true;
      console.log(resp);
    }, err=>{
      console.log(err);
    })
  }

  handleChangeProperty(){

    // algoritmo para cambiar de propiedad, en base al numero de propiedades que se obtengan del api
   if( this.next < (Object.keys(this.allProperties).length -1)){ // comprueba que el siguiente no sea mayor al numero de propiedades
     this.properties = this.allProperties[this.next];  // asigna
     this.next +=1;    // aumenta en 1
   }
   else{
     this.next = 0;  // vuelve al inicio
     this.properties = this.allProperties[this.next];
     this.next = 1;
   }
  }

}
