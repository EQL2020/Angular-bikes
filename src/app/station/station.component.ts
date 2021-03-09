import { Component, Input, OnInit } from '@angular/core';
import { Station } from '../model/station';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  @Input() 
  station : Station

  constructor() { }

  ngOnInit(): void {
  }

}
