//rutas
import { APP_ROUTING } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//service
import { VideojuegosService } from './services/videojuegos.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    VideojuegoComponent,
    VideojuegosComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [VideojuegosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
