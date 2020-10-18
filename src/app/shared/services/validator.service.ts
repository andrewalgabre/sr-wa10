import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  /**
   * Checks if the nickname is valid
   * @param nickname Nickname
   * @returns boolean observable
   */
  public isValidNickname(nickname: string): Observable<boolean> {
    if (!nickname.toLowerCase().startsWith('a')) {
      return of(false);
    }
    return of(true);
  }
}
