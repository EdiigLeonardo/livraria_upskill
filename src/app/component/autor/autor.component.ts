import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {
  @Input() autor="";
  @Input() livros="";

  constructor() { }

  ngOnInit(): void {
  }

}
