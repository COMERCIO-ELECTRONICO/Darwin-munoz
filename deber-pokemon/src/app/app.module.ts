import { AppRoutesComponent } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomComponent } from './inicio/hom/hom.component';
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';
import { PokemonModule } from './pokemon/pokemon.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesComponent,
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
