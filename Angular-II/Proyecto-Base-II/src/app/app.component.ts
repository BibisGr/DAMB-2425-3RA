import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from "./componentes/footer/footer.component";
import { HeroComponent } from "./componentes/hero/hero.component";
import { PrincipalComponent } from "./components/principal/principal.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HeroComponent, PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-Base-II';
  name = 'Jorge';
  lastname: string = 'Garnica';
  edad = 25;
  edadL: number = 25;
  estatura: number = 1.75;
  mayorEdad: boolean = true;
  casado = true;
  frutas: string[] = ['manzana', 'pera', 'uva'];
  notas: number[] = [5, 8, 9, 10, 6];

  alumno = {
    nombre: 'Jorge',
    apellido: 'Garnica',
    edad: 25,
    notas: [5, 8, 9, 10, 6]
  }

  fruta: {
    nombre: string,
    color: string,
    sabor: string
  } =
    {
      color: 'Blanco',
      nombre: 'Manzana',
      sabor: 'Dulce'
    }

    SumaEdad(): void{
      this.edad = this.edad+1
    }
    masUno():number{
      return this.edadL =this.edadL + 1;
    }
    cambiaNombre(): string{
     return this.name = 'jose Luis';
    }
}
