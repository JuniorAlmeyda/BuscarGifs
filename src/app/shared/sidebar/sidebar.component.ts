 import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor( private gisfService: GifsService ){}

  get historial(){
    return this.gisfService.historial;
  }

  buscar (termino: string){
    console.log(termino);
    this.gisfService.buscarGifs(termino);
  }

}
 