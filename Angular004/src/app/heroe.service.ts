//1 ) import

import { Injectable } from '@angular/core';
import { Heroe } from './interfaces/heroe.interfaz';
import { HEROES } from './constantes/heroes.constante';
// 2) decorador
@Injectable({
  providedIn: 'root'
})

// 3) clase
export class HeroeService {

  constructor() { }
  
  // metodos 
  getHeroes(): Heroe[]
  {
    return HEROES;
  }
}
