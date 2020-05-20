import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './editar/editar.component';


const routes: Routes = [
  {
    path: 'listar',

    component:ListarComponent

  },
  {
    path: 'crear',

    component: CrearComponent

  },
  {
    path: 'editar',

    component: EditarComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
