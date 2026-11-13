import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Item } from './features/item/item';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'item', component: Item },
];
