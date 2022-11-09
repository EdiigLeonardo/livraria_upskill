import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LivroComponent } from './component/livro/livro.component';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { NavegacaoComponent } from './component/navegacao/navegacao.component';
import { LivrosComponent } from './paginas/livros/livros.component';
import { DetalhesComponent } from './paginas/detalhes/detalhes.component';
import { DetalheComponent } from './component/detalhe/detalhe.component';
import { AutorComponent } from './component/autor/autor.component';
import { FavoritoComponent } from './component/favorito/favorito.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { AutoresComponent } from './paginas/autores/autores.component';
import { VendasComponent } from './paginas/vendas/vendas.component';
import { VendaComponent } from './component/venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    CabecalhoComponent,
    NavegacaoComponent,
    LivrosComponent,
    DetalhesComponent,
    DetalheComponent,
    AutorComponent,
    FavoritoComponent,
    FavoritosComponent,
    AutoresComponent,
    VendasComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
