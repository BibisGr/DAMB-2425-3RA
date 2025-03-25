import { Jugador } from './../../common/jugador';
import { Participante } from '../../common/participante';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jugador',
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {
  persona = {
    nombre: 'David garcía',
    alias: 'The Grefg',
    pais: 'Spain',
    pesoenKG: 75,
    rival: 'WestCol',
    win: 0,
    lose:0,
  }
  esdebutante(jugador: Jugador){
    if(jugador.win == 0 || jugador.lose){
      return 'debutante'
    }
    else return 'Experimentado'
  }

  jugador: Jugador= {
    nombre: 'Rocío',
    alias: 'Roro',
    pais: 'Spain',
    pesoenKG: 56,
    rival: 'Abby',
    win: 0,
    lose:0
  }


  participante: Participante = {
    boxeador: this.jugador,
    profesion: 'streamer',
  }

}
