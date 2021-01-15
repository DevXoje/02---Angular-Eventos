import { Component, OnInit, ViewChild } from '@angular/core';

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
  sortMode = "";
  textoBusqueda = "";
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
    //this.sortMode = this.searcher.sortMode;
    //this.textoBusqueda = this.searcher.textoBusqueda;
  }


  searchEventos() {
    console.log(this.eventos);
  }


  ngOnInit(): void {
  }

}
