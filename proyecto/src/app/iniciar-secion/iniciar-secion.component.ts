import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.services';

@Component({
  selector: 'app-iniciar-secion',
  templateUrl: './iniciar-secion.component.html',
  styleUrls: ['./iniciar-secion.component.css']
})
export class IniciarSecionComponent implements OnInit {
  correo = '';
  pass = '';
  seleccionadoValor

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['darwin', 'jordan', 'wilson'];


  constructor(
    private readonly _loginService
    : LoginService
  ) { 
    
  }

  ngOnInit(): void {}

  Registrarse() {
    this._loginService
    .metodoPost('http://localhost:1337/',
    {
      Nombre: "",
      Apellido: "",
      Direccion: "",
      Cedula: "",
      Usuario: "",
      Contraseña: this.pass,
    }
    )
    .subscribe((resultadoPost) => {
      console.log('Respuest de Post');
      console.log(resultadoPost);
    });
  }
}
  