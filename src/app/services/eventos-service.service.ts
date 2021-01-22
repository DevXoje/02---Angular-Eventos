import { Injectable } from '@angular/core';
import { IEvento } from '../Models/IEvento';

@Injectable({
  providedIn: 'root'
})
export class EventosServiceService {
  eventos: IEvento[];

  constructor() {
    this.eventos = [
      {
        title: "Evento de prueba",
        image: "assets/photography-equipment.jpg",
        date: "2019-03-15",
        description: "Nos lo pasaremos genial",
        price: 23.95
      },
      {
        title: "Evento de prueba 2",
        image: "assets/photography-kitchen-tools.jpg",
        date: "2019-03-21",
        description: "Este es peor",
        price: 15.5
      }
    ];
  }
  obtenerEventos() {
    return this.eventos;
  }
}
