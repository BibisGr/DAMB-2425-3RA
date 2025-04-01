import { Component, OnInit } from '@angular/core';
import { Player } from '../../common/player';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-jugadores',
  imports: [],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent implements OnInit {

  player!: Player;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    // la funcion para cargar los datos
    this.loadPlayer();
  }

  loadPlayer() {

    this.dataservice.getPlayer().subscribe(
      {
        next: (data) => {
          console.log(data)
          this.player = data
        },
        error: err => {
          console.log(err)
        }
        ,
        complete: () => {
          console.log('peticion completada')
        }
      },
    )

}

  // superheroes = {
  //   NombreSquad: 'Los programeros',
  //   baseSecreta: 'Progresa A9',
  //   city: 'Valencia',
  //   activeGroup: true,
  //   miembros: [
  //     {
  //       alias: 'MegaAmin',
  //       identidadSecreta: 'Amin',
  //       active: true,
  //       superpoderes: [
  //         'ControlMental','Gravitación','Supervelocidad'
  //       ]
  //     },
  //     {
  //       alias: 'SuperTony',
  //       identidadSecreta: 'Tony',
  //       active: true,
  //       superpoderes: [
  //         'Respiración de fuego','levitación','Ultrasonido'
  //       ]
  //     },
  //     {
  //       alias: 'Blancy',
  //       identidadSecreta: 'Ieva',
  //       active: true,
  //       superpoderes: [
  //         'Inmortalidad','SuperInteligencia','Superfuerza'
  //       ]
  //     }
  //   ]

  // }

}
