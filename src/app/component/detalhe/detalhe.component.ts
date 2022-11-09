import {Component, Input, OnInit} from '@angular/core';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faAngleDown = faAngleDown;
  faBookmark = faBookmark;
  @Input() titulo="";
  @Input() autor="";
  @Input() ano="";
  @Input() sinopse="";
  @Input() imagem="";

}
