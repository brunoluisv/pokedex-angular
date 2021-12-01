import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InputComponent } from './components/input/input.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PokedexService } from './services/pokedex.service';
import { appReducers } from './store/app.reducers';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        HeaderComponent,
        CardComponent,
        PaginatorComponent,
        InputComponent,
        DetailpageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
    ],
    providers: [
        PokedexService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
