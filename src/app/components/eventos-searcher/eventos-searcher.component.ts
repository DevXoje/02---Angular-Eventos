import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-searcher',
  templateUrl: './eventos-searcher.component.html',
  styleUrls: ['./eventos-searcher.component.sass']
})
export class EventosSearcherComponent implements OnInit {
  sortMode = "";
  textoBusqueda = "";


  constructor() { }

  searchEventos() {
    //console.log(this.eventos);
  }
  ordenarFecha(e: Event) {
    this.textoBusqueda = "";
    this.sortMode = "date";
    e.preventDefault();
  }
  ordenarPrecio(e: Event) {
    this.textoBusqueda = "";
    this.sortMode = "price";
    e.preventDefault();
  }
  ngOnInit(): void {
  }

}
