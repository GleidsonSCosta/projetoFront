import { TestBed } from '@angular/core/testing';

import { CadastrarServiceService } from './cadastrar-service.service';

describe('CadastrarServiceService', () => {
  let service: CadastrarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
