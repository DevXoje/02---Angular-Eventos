import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvento } from 'src/app/Models/IEvento';

@Component({
  selector: 'app-evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.sass']
})
export class EventoItemComponent implements OnInit {

  @Input() evento: IEvento;
  @Output() notify: EventEmitter<IEvento> = new EventEmitter();
  constructor() { }

  deleteEvento() {
    this.notify.emit(this.evento);
  }

  ngOnInit(): void {
  }
}
