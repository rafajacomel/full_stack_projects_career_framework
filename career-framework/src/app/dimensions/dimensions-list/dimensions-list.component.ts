import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimensions-list',
  templateUrl: './dimensions-list.component.html',
  styleUrls: ['./dimensions-list.component.css']
})
export class DimensionsListComponent implements OnInit {
  dimensions: String[] = [
    "Business Results",
    "Individual Achievements in Project",
    "Innovation",
    "Skills",
    "Responsability with Others"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
