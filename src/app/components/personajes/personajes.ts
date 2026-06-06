import { Component, OnInit, signal } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.html',
  styleUrl: './personajes.css'
})
export class PersonajesComponent implements OnInit {
  personajes = signal<Personaje[]>([]);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private personajeService: PersonajeService) {}

  ngOnInit(): void {
    this.cargando.set(true);
    this.personajeService.getPersonajes().subscribe({
      next: (data) => {
        this.personajes.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudo conectar con la API.');
        this.cargando.set(false);
      }
    });
  }
}
