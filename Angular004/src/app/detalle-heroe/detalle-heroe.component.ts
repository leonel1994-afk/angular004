import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaz';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent implements OnInit {

  constructor() { }

   @Input() heroe?: Heroe;

   @Input() parametroEntrada?: string;

  ngOnInit(): void {
  }



}
