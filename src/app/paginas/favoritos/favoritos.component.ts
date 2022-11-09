import { Component, OnInit } from '@angular/core';
import {LivroService} from "../../services/livro.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  constructor(private livroService: LivroService) { }
  favoritos = this.livroService.getFavoritos()
  ngOnInit(): void {
  }

}
