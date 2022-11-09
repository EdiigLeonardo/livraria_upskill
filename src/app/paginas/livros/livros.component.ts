import { Component, OnInit } from '@angular/core';
// @ts-ignore
// import {LISTA_LIVROS} from "./Livros"
// import {livro} from "../../services/dados/spec/livro";
import {LivroService} from "../../services/livro.service";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent{
  constructor(private livroService: LivroService) {
  }
  livros = this.livroService.getLivros();

  //listaLivros: livro[] = LISTA_LIVROS
}
