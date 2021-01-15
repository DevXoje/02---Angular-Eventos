import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { EventosShowComponent } from './components/eventos-show/eventos-show.component';
import { EventFilterPipe } from './Pipes/event-filter.pipe';
import { EventosFormComponent } from './components/eventos-form/eventos-form.component';
import { EventosSearcherComponent } from './components/eventos-searcher/eventos-searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventFilterPipe,
    EventosFormComponent,
    EventosSearcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
