import { Component, OnInit } from '@angular/core';
import { Station } from '../model/station';
import { MessagesService } from '../services/messages.service';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  stations : Station[] = [];
  selectedStation? : Station;

  constructor(private stationService : StationService,
              private messagesService : MessagesService) { }

  ngOnInit(): void {
    this.getStations();
  }

  onSelect(station:Station):void {
    this.selectedStation = station;
    this.messagesService.addMessage("Station numéro" + station.id + " sélectionnée");
  }

  getStations():void {
    this.messagesService.addMessage("récupération de la liste des stations");
    this.stationService.getStations()
        .subscribe(jsonData => this.stations = jsonData); 
  }

}
