import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  isSearching = false;

  constructor(private stationService : StationService,
              private messagesService : MessagesService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    // /stations/toulouse
    //var contract = this.route.snapshot.paramMap.get("contract");
    //this.getStations(contract);

    this.route.paramMap.subscribe(params => {
      var contract = params.get("contract");
      this.getStations(contract);
    });
  }

  onSelect(station:Station):void {
    this.selectedStation = station;
    this.messagesService.addMessage("Station numéro" + station.id + " sélectionnée");
  }

  getStations(contract):void {
    this.isSearching = true;
    this.messagesService.addMessage("récupération de la liste des stations de " + contract);
    this.stationService.getStations(contract)
                       .subscribe(jsonData => {
                            this.stations = jsonData; 
                            this.isSearching = false;
                          }); 
  }

}
