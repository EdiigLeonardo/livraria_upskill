import { Component, OnInit } from '@angular/core';
import {LivroService} from "../../services/livro.service";

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  constructor(private livroService: LivroService) { }
  vendas = this.livroService.getVendas();

  ngOnInit(): void {
  }

}
