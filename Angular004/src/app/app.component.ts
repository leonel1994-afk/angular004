import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, DoCheck{
  title = 'Ejercicio :004 con Angular';
  datos: number=20;
// eventos del ciclo de vida de un componente

constructor(){
  console.log(`Constructor- el valor de datos es: ${this.datos}` );
}

ngOnChanges():void{
  console.log(`ngOnChanges- el valor de datos es: ${this.datos}` );
}

ngOnInit():void{
  console.log(`ngOInit- el valor de datos es: ${this.datos}` );
}

ngDoCheck():void{
  console.log(`ngDoCheck- el valor de datos es: ${this.datos}` );
}

ngAferContentInit():void{
  console.log(`ngAferContentInit- el valor de datos es: ${this.datos}` );
}

ngAferContentChecked():void{
  console.log(`ngAferContentChecked- el valor de datos es: ${this.datos}` );
}

ngAfterViewInit():void{
  console.log(`ngAfterViewInit- el valor de datos es: ${this.datos}` );
}

ngAfterViewChecked():void{
  console.log(`ngAfterViewChecked- el valor de datos es: ${this.datos}` );
}

ngOnDestroy():void{
  console.log(`ngOnDestroy- el valor de datos es: ${this.datos}` );
}

sumarNumero():void{
  this.datos+=10;
}

restarNumero():void{
  this.datos-=10;
}
}
