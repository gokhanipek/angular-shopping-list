import { ProductService } from './to-buy/buy.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { shopRouting } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ToBuyComponent } from './to-buy/to-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ToBuyComponent,
  ],
  imports: [
    BrowserModule,
    shopRouting,
    HttpModule,
    FormsModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }

