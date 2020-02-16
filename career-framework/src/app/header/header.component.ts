import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  rafaelLogoPath: String;

  constructor() { 
    this.rafaelLogoPath = "../assets/images/rafael_logo.PNG";
  }

  ngOnInit(): void {
  }

}
