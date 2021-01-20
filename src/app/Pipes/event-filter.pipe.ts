import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from 'src/app/Models/IEvento';


@Pipe({
  name: 'eventfilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEvento[], keyword: string): Array<IEvento> {
    return eventos = (keyword != undefined) ? eventos.filter(evento => evento.title.includes(keyword)) : eventos;
  }

}
