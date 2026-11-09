import { Routes } from '@angular/router';
import { FormComponent } from './components/form-component/form-component';

export const routes: Routes = [
    {path: 'formuario', component: FormComponent},
    {path: '', pathMatch: 'full', redirectTo: '/formuario'}
];
