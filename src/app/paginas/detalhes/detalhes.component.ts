import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LivroService} from "../../services/livro.service";


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  detalhes: any = {};

  constructor(private route: ActivatedRoute, private livroService: LivroService) {
    let id_livro = route.snapshot.params['id_livro'];
    this.detalhes = livroService.getDetalhes(id_livro);
  }

  ngOnInit(): void {
  }
  list_of_detalhes = this.detalhes;

}
