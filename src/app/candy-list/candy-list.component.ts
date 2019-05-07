import { Component, OnInit } from '@angular/core';
import { CandyDataService } from '../candy-data.service';
import { Candy } from '../candy';

@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.css']
})
export class CandyListComponent implements OnInit {

  candies: Candy[];

  constructor(private candyDataService: CandyDataService) {
  }

  ngOnInit() {
    this.candyDataService.getCandy().subscribe(c => (this.candies = c));
  }

  remove(name) {
    for( let candy of this.candies) {
     
  }}

  delete(name) {
    delete Candy[name];
  }

  

}
