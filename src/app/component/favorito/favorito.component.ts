import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent implements OnInit {

  constructor() { }
  @Input() imagem="";
  @Input() id_livro="";

  ngOnInit(): void {
  }

}
