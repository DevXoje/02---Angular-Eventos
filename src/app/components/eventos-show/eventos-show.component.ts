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

  nuevoEvento: IEvento;

  textoBusqueda: string;
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

    /*Form */
    this.nuevoEvento = {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    };
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
  /*Form */
  addEvento() {
    this.eventos.push(this.nuevoEvento);

    this.nuevoEvento = {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    };
  }
  changeImage(e: Event) {
    const fileInput: HTMLInputElement = e.target as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.nuevoEvento.image = reader.result as string;
    });

  }

  ngOnInit(): void {
  }

}
