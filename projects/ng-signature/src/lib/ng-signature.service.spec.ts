import { TestBed } from '@angular/core/testing';

import { NgSignatureService } from './ng-signature.service';

describe('NgSignatureService', () => {
  let service: NgSignatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSignatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
