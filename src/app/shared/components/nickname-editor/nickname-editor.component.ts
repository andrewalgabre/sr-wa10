import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss'],
})
export class NicknameEditorComponent implements OnInit, OnDestroy {
  @Input() set nickNames(nickNames: string) {
    // this.formArray.push;
  }
  @Output() valid = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<number>();

  ngDestroy$ = new EventEmitter();

  public nickNameFormList: FormArray;
  public nickNameAddFormControl: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) {
    this.nickNameFormList = this.formBuilder.array([]);
    this.nickNameAddFormControl = this.formBuilder.control(
      '',
      Validators.required
    );
  }

  ngOnInit(): void {
    this.nickNameFormList.valueChanges
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe(() => {
        if (!this.nickNameFormList.valid) {
          this.valid.next(false);
        }
        this.valid.next(true);
      });
  }

  onNicknameAdd() {
    if (!this.nickNameAddFormControl.valid) return;
    this.nickNameFormList.controls.push(
      new FormControl(this.nickNameAddFormControl.value)
    );
    this.nickNameAddFormControl.reset();
  }

  onNicknameDelete(index: number) {
    this.delete.next(index);
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
