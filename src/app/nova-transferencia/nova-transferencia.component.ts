import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

   valor: number = 23;
   destino: number = 22;

  transf(){
    console.log("transferencia feita com sucesso");
    console.log("valor", this.valor);
    console.log("destino", this.destino);
  }



}
