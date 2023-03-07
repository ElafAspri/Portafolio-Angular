import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';
import { InfoPaginaService } from './info-pagina.service';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  cargando = true;
  productos: any [] = [];


  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  private cargarProductos() {

    this.http.get('https://angular-html-f60e2-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: any  ) => {

      console.log(resp);

      this.productos = resp;
      this.cargando = false;



    });

  }
}