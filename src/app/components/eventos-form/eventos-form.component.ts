import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvento } from 'src/app/Models/IEvento';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.sass']
})
export class EventosFormComponent implements OnInit {
  @Output() notify: EventEmitter<IEvento> = new EventEmitter();
  nuevoEvento: IEvento;

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
    this.notify.emit(this.nuevoEvento);

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
