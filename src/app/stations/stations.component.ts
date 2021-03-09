import { Component, OnInit } from '@angular/core';
import { Station } from '../model/station';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  stations : Station[] = [];
  selectedStation? : Station;

  constructor(private stationService : StationService) { }

  ngOnInit(): void {
    this.getStations();
  }

  onSelect(station:Station):void {
    this.selectedStation = station;
  }

  getStations():void {
    this.stationService.getStations()
        .subscribe(jsonData => this.stations = jsonData); 
  }

}
