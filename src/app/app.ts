import { Component } from '@angular/core';
import { PersonajesComponent } from './components/personajes/personajes';

@Component({
  selector: 'app-root',
  imports: [PersonajesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
