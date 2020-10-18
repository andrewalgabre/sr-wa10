import {
  ChangeDetectionStrategy,
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
  FormGroup,
  Validators,
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { NicknameValidator } from 'src/app/core/validators/nickname.validator';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NicknameEditorComponent implements OnInit, OnDestroy {
  @Input() set nicknames(nicknnameList: string[]) {
    if (!nicknnameList) return;
    (this.nicknameFormList.get('nicknames') as FormArray).clear();
    nicknnameList.map((nickname) =>
      (this.nicknameFormList.get('nicknames') as FormArray).push(
        new FormControl(
          nickname,
          [Validators.required],
          [NicknameValidator.createValidator(this.validatorService)]
        )
      )
    );
  }

  @Output() valid = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<number>();
  @Output() add = new EventEmitter<string>();
  @Output() nicknameChange = new EventEmitter<{
    index: number;
    nickname: string;
  }>();

  ngDestroy$ = new EventEmitter();

  public nicknameFormList: FormGroup;
  public nickNameAddFormControl: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) {
    this.nicknameFormList = this.formBuilder.group({
      nicknames: this.formBuilder.array([]),
    });
    this.nickNameAddFormControl = this.formBuilder.control(
      '',
      [Validators.required],
      [NicknameValidator.createValidator(this.validatorService)]
    );
  }

  ngOnInit(): void {
    this.nicknameFormList.valueChanges.subscribe(() => {
      if (!this.nicknameFormList.valid) {
        this.valid.next(false);
        return;
      }
      this.valid.next(true);
    });
  }

  onNicknameAdd() {
    if (!this.nickNameAddFormControl.valid) return;
    this.add.next(this.nickNameAddFormControl.value);
    this.nickNameAddFormControl.reset();
  }

  onNicknameDelete(index: number) {
    this.delete.next(index);
  }

  onNicknameChange(index: number, nickname: string) {
    this.nicknameChange.next({ index, nickname });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
