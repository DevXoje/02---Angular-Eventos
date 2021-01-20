import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from 'src/app/Models/IEvento';


@Pipe({
  name: 'eventfilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEvento[], keyword: string): Array<IEvento> {
    let output: Array<IEvento> = new Array<IEvento>();
    if (keyword != undefined) {
      for (let i = 0; i < eventos.length; i++) {
        const evento = eventos[i];
        if (evento.title.includes(keyword)) {
          output.push(evento);
        }
      }
    } else {
      output = eventos;
    }


    return output;
  }
}
