import { Component, Input, OnInit } from '@angular/core';
import { IEvento } from 'src/app/Models/IEvento';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.sass']
})
export class EventosFormComponent implements OnInit {
  nuevoEvento: IEvento;
  @Input() eventos: IEvento[];

  constructor() {
    this.nuevoEvento = {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    };
  }
  addEvento() {
    this.eventos.push(this.nuevoEvento);
    console.log(this.nuevoEvento);

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
