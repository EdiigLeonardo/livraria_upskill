import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  constructor() { }

  @Input() nome_livro="";
  @Input() autor="";
  @Input() data="";
  @Input() imagem="";

  ngOnInit(): void {
  }

}
