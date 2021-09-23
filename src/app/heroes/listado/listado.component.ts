import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan América'];
  heroeBorrado: string = '';
  banderaBorrado: boolean = false;

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    this.banderaBorrado = true;
  }
}
