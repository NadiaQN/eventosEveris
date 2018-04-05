import { Component, OnInit, Input, Output } from '@angular/core';
import { ListMeetupComponent } from './../list-meetup/list-meetup.component';


@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss']
})
export class MeetupComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  /*EventoPage(id) {
    this.id = navParams.get('idEvento');
  }*/

}
