import { Component, OnInit } from '@angular/core';
import { Contract } from '../model/contract';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  contracts : Contract[];

  constructor(private contratsService : StationService) { }

  ngOnInit() {
    this.contratsService.getContracts()
                        .subscribe(contracts => this.contracts = contracts);
  }

}
