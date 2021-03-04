import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './Http.service';

@Injectable({providedIn: 'root'})
export class PropertyService {

  constructor(private http: HttpService) { }

  findAll(): Observable<any>{
    return this.http.get('properties.json',{});
  }

  getImagesProperty(id:string){
    return this.http.get(`property_images/${id}.json`, {});
  }

}
