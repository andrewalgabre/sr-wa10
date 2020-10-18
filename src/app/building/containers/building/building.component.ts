import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
})
export class BuildingComponent implements OnInit {
  data = {
    address: '30 St Mary Axe, London',
    nicknames: ['Abraham Building', 'Alexander Tower'],
    description:
      'Das Viertel rund um den Mythenquai entstand vor 150 Jahren, als am nordwestlichen Ufer des Zürichsees das Sumpfgebiet trockengelegt und aufgeschüttet wurde. ',
  };

  formValid: boolean;

  constructor() {}

  ngOnInit(): void {}

  onAdd(nickname: string): void {
    this.data.nicknames = [...this.data.nicknames, nickname];
  }

  onChange({ index, nickname }: { index: number; nickname: string }) {
    const nicknames = [...this.data.nicknames];
    nicknames[index] = nickname;
    this.data.nicknames = [...nicknames];
  }

  onDelete(index: number): void {
    const nicknames = [...this.data.nicknames];
    nicknames.splice(index, 1);
    this.data.nicknames = [...nicknames];
  }

  onValid(valid: boolean): void {
    this.formValid = valid;
  }

  onSave() {
    console.log('----- SAVE -----', this.data);
  }
}
