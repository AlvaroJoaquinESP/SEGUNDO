import { Component } from '@angular/core';
/**
 * Decorador.
 * selector->Nombre para otros componentes.
 * templateUrl->Ruta del componente.
 * styleUrl->Ruta para estilos del componente.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo soy el amo en Angular';
  numero = 33;
}
