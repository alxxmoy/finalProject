import { Component, OnInit } from '@angular/core';
import { Candy } from '../candy';
import { CandyDataService } from '../candy-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private candyDataService: CandyDataService) {
  }

  candies: Candy[];
  
  
  
  ngOnInit() {
    this.candyDataService.getCandy().subscribe(c => (this.candies = c));
  }

}
