import { Component, Injectable, OnInit } from '@angular/core';
import { cidades } from '../model/cidades.model';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'spa-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  city!: cidades;

 constructor() { }

  ngOnInit(): void {
   this.retrieveAll();
  }

  retrieveAll(): cidades[]{
    return CIDADES;
  }

}

var CIDADES: cidades[] =[
  {
    name: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    citzens: 9145125,
  },
  {
    name: 'Belo Horizonte',
    state: 'Minas Gerais',
    citzens: 5489656
  },
  {
    name: 'São Leopoldo',
    state: 'Rio Grande do Sul',
    citzens: 5646532
  }
]