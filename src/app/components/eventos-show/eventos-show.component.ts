import { Component, OnInit, ViewChild } from '@angular/core';
import { EventosServiceService } from '../../services/eventos-service.service';

import { IEvento } from 'src/app/Models/IEvento';
//import { EventosSearcherComponent } from '../eventos-searcher/eventos-searcher.component';


@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.sass']
})
export class EventosShowComponent implements OnInit {
  eventos: IEvento[];
  //@ViewChild("app-eventos-searcher") searcher: EventosSearcherComponent;

  textoBusqueda: string;
  constructor(private _servicio: EventosServiceService) {
    this.eventos = _servicio.obtenerEventos();

  }

  addEvento(newEvento: IEvento) {
    this.eventos.push(newEvento);
  }
  removeEvento(oldEvento: IEvento) {
    this.eventos = this.eventos.filter(evento => evento != oldEvento);
  }

  ordenarFecha(e: Event) {
    this.textoBusqueda = "";

    console.log(this.eventos);
    this.eventos.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    console.log(this.eventos);

    e.preventDefault();
  }
  ordenarPrecio(e: Event) {
    this.textoBusqueda = "";

    console.log(this.eventos);
    this.eventos.sort((a, b) => a.price - b.price);
    console.log(this.eventos);

    e.preventDefault();
  }

  ngOnInit(): void {
  }

}
