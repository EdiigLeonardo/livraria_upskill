import { Injectable } from '@angular/core';

import {LISTA_LIVROS} from "../paginas/livros/Livros";

// @ts-ignore
import detalhes from "./dados/detalhes_livros"

// @ts-ignore
import favoritos from "./dados/favoritos"

// @ts-ignore
import vendas from "./dados/vendas"

// @ts-ignore
import autores from "./dados/autores"

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }

  getLivros(){
    return LISTA_LIVROS
  }

  getDetalhes(id_livros:number){
    return detalhes[id_livros]
  }

  getAutor(){
    return autores;
  }

  getFavoritos(){
    return favoritos;
  }

  getVendas(){
    return vendas;
  }
}
