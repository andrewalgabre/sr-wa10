import { TestBed } from '@angular/core/testing';

import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {
  let service: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('nickname should be invalid', async () => {
    const result = await service.isValidNickname('f').toPromise();
    expect(result).toBeFalse();
  });

  it('nickname should be valid', async () => {
    const result = await service.isValidNickname('a').toPromise();
    expect(result).toBeTrue();
  });
});
