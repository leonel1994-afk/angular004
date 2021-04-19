import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaz';
import { HEROES } from '../constantes/heroes.constante';
//importar el servicio
import { HeroeService } from '../heroe.service';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //heroe: string='Superman';
  heroe: Heroe = {
    id: 1,
    nombre: 'Superman',
  };

  //CON COMPONENTE
  heroes: Heroe[]= HEROES;

  //CON SERVICIOS
  //heroes:Heroe[]=[]; 

  //Obtiene el item seleccionado en la lista
  heroeSeleccionado?:Heroe;

  parametro: string ='Jhon Doe';

  //realizar una inyeccion de dependencias
  constructor(private heroeService: HeroeService) {

   }

  ngOnInit(): void {
    //llamar al metodo para recuperar los datos de la constante
    this.getHeroesComponent();
  }

  clicItemSeleccionado(heroe:Heroe):void{
    this.heroeSeleccionado=heroe;
  }

  // permite recupear los datos de la constante (HEROES) usando 
  // el metodo creado en el servicio 

  getHeroesComponent ():void{
    this.heroes=this.heroeService.getHeroes();
  }

}
