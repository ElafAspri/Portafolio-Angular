import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;

  constructor( public _servicio: InfoPaginaService,
               _privaterouter: Router ) { }

  ngOnInit() {

  }

  buscarProducto( termino: string) {

    if ( termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino ])
  }
}
