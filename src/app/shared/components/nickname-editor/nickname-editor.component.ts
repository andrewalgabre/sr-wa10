import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss'],
})
export class NicknameEditorComponent implements OnInit {
  @Input() set nickNames(nickNames: string) {
    // this.formArray.push;
  }

  public nickNameFormList: FormArray;
  public nickNameAddFormControl: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.nickNameFormList = this.formBuilder.array([]);

    this.nickNameAddFormControl = this.formBuilder.control('');
  }

  ngOnInit(): void {}

  onNicknameAdd() {
    if (!this.nickNameAddFormControl.valid) return;
    this.nickNameFormList.controls.push(
      new FormControl(this.nickNameAddFormControl.value)
    );
    this.nickNameAddFormControl.reset();
  }

  onNicknameDelete() {}
}
