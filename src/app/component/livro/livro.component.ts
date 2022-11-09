import { Component, Input} from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent{
  @Input() imagem="";
  @Input() titulo ="";
  @Input() autor="";
  @Input() ano_publicacao="";
  @Input() id_livro = "";

  faEye = faEye;
}
