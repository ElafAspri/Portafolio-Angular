import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';
import { InfoPaginaService } from './info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  cargando = true;
  productos: Producto [] = [];
  productosFiltrado: Producto[] = [];


  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  private cargarProductos() {

    return  new Promise<void> ( ( resolve, reject ) => {

          this.http.get('https://angular-html-f60e2-default-rtdb.firebaseio.com/productos_idx.json')
          .subscribe( (resp: any ) => {
            this.productos = resp;
            this.cargando = false;
            resolve();
          });


    });
  }

  getProducto( id: string) {

    return this.http.get(`https://angular-html-f60e2-default-rtdb.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string ) {

    if ( this.productos.length === 0 ) {

      this.cargarProductos().then( () => {
        this.filtrarProductos( termino );

      });
    } else {

      this.filtrarProductos( termino);

    }


  }

    private filtrarProductos ( termino: string) {

      //console.log( this.productos );
      this.productosFiltrado = [];

      termino = termino.toLocaleLowerCase();

      this.productos.forEach( prod => {

        const tituloLower = prod.titulo.toLocaleLowerCase();

        if ( prod.categoria.indexOf( termino ) >= 0 || prod.titulo.indexOf( termino ) >= 0  ) {
          this.productosFiltrado.push( prod );

        }


      });

      }

  }


