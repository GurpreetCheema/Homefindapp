import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
    private _places: Place[] = [
      new Place (
        'p1',
        'Manhattan Mansion',
        'In the heart of New York City',
        'http://www.freeimageslive.com/galleries/buildings/australia/pics/60-sydneycircularquay.jpg',
        149.99
      ), 
      new Place(
        'p2',
        'Paristio',
        'A romantic place in paris',
        'http://www.freeimageslive.com/galleries/buildings/australia/pics/federation_square1010878.jpg',
        199.99
      ), 
      new Place(
        'p3',
        'The Foggy Palace',
        'Not your average city trip!',
        'http://www.freeimageslive.com/galleries/buildings/australia/pics/43-cammotree.jpg',
        99.99
      )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)
  };
}
}

