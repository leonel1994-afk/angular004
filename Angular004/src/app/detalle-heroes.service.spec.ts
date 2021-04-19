import { TestBed } from '@angular/core/testing';

import { DetalleHeroesService } from './detalle-heroes.service';

describe('DetalleHeroesService', () => {
  let service: DetalleHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
