import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { VendeursDePieceComponent } from './vendeurs-de-piece/vendeurs-de-piece.component';
import { PiecesComponent } from './pieces/pieces.component';
import { EntrerSortieComponent } from './entrer-sortie/entrer-sortie.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PieceDetailsComponent } from './piece-details/piece-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseursComponent,
    VendeursDePieceComponent,
    PiecesComponent,
    EntrerSortieComponent,
    PieceDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
