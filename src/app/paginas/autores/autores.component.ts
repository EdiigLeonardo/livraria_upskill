import { Component, OnInit } from '@angular/core';
import {LivroService} from "../../services/livro.service";

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
  }
  autores = this.livroService.getAutor();

}
