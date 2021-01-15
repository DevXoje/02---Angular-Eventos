import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from 'src/app/Models/IEvento';


@Pipe({
  name: 'eventfilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEvento[], keyword: string, sort: string): Array<IEvento> {
    let output: Array<IEvento> = new Array<IEvento>();

    switch (sort) {
      case "date":
        output = eventos;
        output.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;

      case "price":
        output = eventos;
        output.sort((a, b) => a.price - b.price);
        break;

      default:
        for (let i = 0; i < eventos.length; i++) {
          const evento = eventos[i];
          if (evento.title.includes(keyword)) {
            output.push(evento);
          }
        }
        break;
    }

    return output;
  }
}
