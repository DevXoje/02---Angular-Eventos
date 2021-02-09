import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvento } from 'src/app/Models/IEvento';
import { EventosServiceService } from 'src/app/services/eventos-service.service';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.sass']
})
export class EventosFormComponent implements OnInit {
  @Output() notify: EventEmitter<IEvento> = new EventEmitter();
  nuevoEvento: IEvento;

  constructor(private eventosService: EventosServiceService) {
    this.nuevoEvento = {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    };
  }
  addEvento() {
    this.eventosService.addEvent(this.nuevoEvento).subscribe(evento => {
      this.notify.emit(evento);
      this.resetFormulario();
    });

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
  resetFormulario() {
    this.nuevoEvento = {
      title: "",
      image: "",
      date: "",
      description: "",
      price: 0
    };
  }
  ngOnInit(): void {
  }

}
