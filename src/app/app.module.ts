import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { EventosShowComponent } from './components/eventos-show/eventos-show.component';
import { EventFilterPipe } from './Pipes/event-filter.pipe';
import { EventosFormComponent } from './components/eventos-form/eventos-form.component';
import { EventosSearcherComponent } from './components/eventos-searcher/eventos-searcher.component';
import { EventoItemComponent } from './components/evento-item/evento-item.component';

import { EventosServiceService } from "./services/eventos-service.service";

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventFilterPipe,
    EventosFormComponent,
    EventosSearcherComponent,
    EventoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
