import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 10.87054;
  lng: number = 106.80322;
  zoom: number = 15;
  constructor() { }

  ngOnInit() {
  }

}
