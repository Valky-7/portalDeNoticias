import { Routes } from '@angular/router';
import { Local } from './local/local';
import { Regional } from './regional/regional';
import { Internacional } from './internacional/internacional';
import { Home } from './home/home';
import { Somos } from './somos/somos';

export const routes: Routes = [
    {path:'local', component:Local},
    {path:'regional', component:Regional},
    {path:'internacional', component:Internacional},
    {path: 'home', component:Home},
    {path: 'quem-somos', component:Somos}
];
