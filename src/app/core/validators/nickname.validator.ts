import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ValidatorService } from 'src/app/shared/services/validator.service';

export class NicknameValidator {
  static createValidator(validatorService: ValidatorService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return validatorService.isValidNickname(control.value).pipe(
        map((result: boolean) => {
          return result ? null : { nicknameInvalid: true };
        })
      );
    };
  }
}
