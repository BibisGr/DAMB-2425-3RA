import { Jugador } from "./jugador";

export class Participante {
  boxeador: Jugador;
  profesion: string;

  constructor(jugador: Jugador, profesion: string){
    this.boxeador = jugador
    this.profesion = profesion
  }
}

