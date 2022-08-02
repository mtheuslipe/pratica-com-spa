import { Component, OnInit } from '@angular/core';
import { CidadesComponent } from '../cidades/cidades.component';
import { cidades } from '../model/cidades.model';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cidade: cidades[]=[];

  constructor(private cidadesComponent: CidadesComponent) { }

  ngOnInit(): void {
    this.cidade= this.cidadesComponent.retrieveAll();
  }

}
