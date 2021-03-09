
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { Station } from '../model/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

constructor(private http : HttpClient) { }


getStations() : Observable<Station[]> {

  var stationsUrl = 'https://api.jcdecaux.com/vls/v1/stations?contract=creteil&apiKey=4672fe7952d24de01bef059e6e8f2570858dcd5d';

  //return of(STATIONS);
  //return this.http.get<Station[]>(stationsUrl);
  return this.http.get(stationsUrl)
             .pipe(map(jcdStations => this.jcdToStations(jcdStations)));
  }

  // mapping d'un Array de stations JCD vers un Array de stations "maison"
private jcdToStations(jcdStations){
  let stations : Station[] = [];
  
  jcdStations.forEach(jcdStation => {
    let station = new Station();
    station.id = jcdStation["number"];
    station.name = jcdStation["name"];
    station.contract = jcdStation["contract_name"];
    station.bikes = jcdStation["available_bikes"];
    station.capacity = jcdStation["bike_stands"];

    stations.push(station);
  });
  return stations;
}

}