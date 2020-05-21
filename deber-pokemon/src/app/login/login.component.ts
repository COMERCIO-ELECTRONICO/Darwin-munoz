import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email = '';
  contrasena = '';
nombre='';
apellido='';
  ngOnInit(): void {}

  obtenerFormulario(formulario) {
    console.log(formulario);
    alert(
      'correo: ' +
        formulario.controls.email.value +
        'password: ' +
        formulario.controls.contrasena.value +
        'Nombre:' +
         formulario.controls.nombre.value  +
         'Apellido' +
         formulario.control.apellido.value
    );
  }
}
