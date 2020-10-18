import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-info',
  templateUrl: './building-info.component.html',
  styleUrls: ['./building-info.component.scss'],
})
export class BuildingInfoComponent implements OnInit {
  @Input() description: string = '';
  @Input() address: string = '';

  constructor() {}

  ngOnInit(): void {}
}
