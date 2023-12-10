import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { PiecesComponent } from './pieces/pieces.component';
import { VendeursDePieceComponent } from './vendeurs-de-piece/vendeurs-de-piece.component';
import { EntrerSortieComponent } from './entrer-sortie/entrer-sortie.component';

const routes: Routes = [
  {
    path:'fournisseurs',
    component:FournisseursComponent
  },
  {
    path:'pieces',
    component:PiecesComponent
  },
  {
    path:'vendeurs',
    component:VendeursDePieceComponent
  },
  {
  path:'entrer',
  component:EntrerSortieComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
