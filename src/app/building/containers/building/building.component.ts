import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
})
export class BuildingComponent implements OnInit {
  data = {
    address: '30 St Mary Axe, London',
    description:
      'Das Viertel rund um den Mythenquai entstand vor 150 Jahren, als am nordwestlichen Ufer des Zürichsees das Sumpfgebiet trockengelegt und aufgeschüttet wurde. ',
  };

  constructor() {}

  ngOnInit(): void {}
}
