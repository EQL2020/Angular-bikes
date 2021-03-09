
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { Contract } from '../model/contract';
import { Station } from '../model/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private apiKey = "4672fe7952d24de01bef059e6e8f2570858dcd5d";

constructor(private http : HttpClient) { }

getContracts() : Observable<Contract[] > {
  var serviceUrl = `https://api.jcdecaux.com/vls/v3/contracts?apiKey=${this.apiKey}`;
  return this.http.get(serviceUrl)
                  .pipe(map(jcdContracts => this.jcdToContracts(jcdContracts)));

}

getStations(contract : string) : Observable<Station[]> {
  
 
  var stationsUrl = `https://api.jcdecaux.com/vls/v1/stations?contract=${contract}&apiKey=${this.apiKey}`;

  //return of(STATIONS);
  //return this.http.get<Station[]>(stationsUrl);
  return this.http.get(stationsUrl)
             .pipe(map(jcdStations => this.jcdToStations(jcdStations)));
  }


private jcdToContracts(jcdContracts){
  
  

  let contracts : Contract[] = [];

  jcdContracts.forEach(jcd => {
    let contract = new Contract();
    contract.city = jcd["name"];
    contract.name = jcd["commercial_name"];

    if(!contract.name)
    {
      contract.name = contract.city;
    }

    contracts.push(contract);
  });

  return contracts;
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