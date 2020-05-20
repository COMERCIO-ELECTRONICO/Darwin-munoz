import { LoginComponent } from './login/login.component';
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomComponent } from './inicio/hom/hom.component';
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';


const rutas: Routes = [
    {
        path: 'inicio',
        component: HomComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {

        path: 'pokemon',
        loadChildren: ()=>import('./pokemon/pokemon.module')
        .then(pokemon=>pokemon.PokemonModule)
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full' 
    },
    { 
        path: '**',
        component: NoEncontradoComponent 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(rutas    )],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutesComponent {
}

