import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/datos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log(getEvent())
  }

  

}
