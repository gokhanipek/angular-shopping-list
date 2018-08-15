import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ToBuyComponent } from './to-buy/to-buy.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'to-buy', component: ToBuyComponent},
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }];

export const shopRouting = RouterModule.forRoot(routes);

