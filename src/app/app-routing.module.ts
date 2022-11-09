import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LivrosComponent} from "./paginas/livros/livros.component";
import {DetalhesComponent} from "./paginas/detalhes/detalhes.component";
import {AutoresComponent} from "./paginas/autores/autores.component";
import {FavoritosComponent} from "./paginas/favoritos/favoritos.component";
import {VendasComponent} from "./paginas/vendas/vendas.component";

const routes: Routes = [
  {path: "", redirectTo: "/livros", pathMatch: "full"},
  {path: "livros", component: LivrosComponent},
  {path: "detalhes/:id_livro", component: DetalhesComponent},
  {path: "autores", component: AutoresComponent},
  {path: "favoritos", component: FavoritosComponent},
  {path: "vendas", component: VendasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
