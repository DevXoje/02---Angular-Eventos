import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventoResponse, EventosResponse } from '../Models/responses';
import { IEvento } from '../Models/IEvento';

@Injectable({
  providedIn: 'root'
})
export class EventosServiceService {
  eventos: IEvento[];

  constructor(private http: HttpClient) {
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
  obtenerEventos(): Observable<IEvento[]> {
    return this.http.get<EventosResponse>('/eventos').pipe(map(resp => resp.eventos));
  }

  addEvent(evento: IEvento): Observable<IEvento> {
    return this.http.post<EventoResponse>(`/eventos`, evento).pipe(map(resp => resp.evento));
  }
  /*
  deleteEvento(idEvent: number): Observable<EventoDeleteResponse> {
    return
  }
  */
}
