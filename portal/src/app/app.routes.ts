import { Routes } from '@angular/router';
import { Local } from './local/local';
import { Regional } from './regional/regional';
import { Internacional } from './internacional/internacional';

export const routes: Routes = [
    {path:'local', component:Local},
    {path:'regional', component:Regional},
    {path:'internacional', component:Internacional},
];
