import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoI } from '../interfaces/producto.interface';
import { inject } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: ProductoI[] = [];
  productosFIltrado: ProductoI[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-83d43.firebaseio.com/productos_idx.json')
        .subscribe((resp: ProductoI[]) => {
          this.productos = resp;
          console.log(resp);
          // setTimeout(()=>{
          this.cargando = false;
          resolve();
          //},2000);
        })
    });
  }

  public getProductos(id: string) {
    return this.http.get(`https://angular-html-83d43.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino: string) {
    if(this.productos.length === 0){
      this.cargarProductos().then(()=>{
        this.filtrarProducto(termino);
      });
    }else{
      this.filtrarProducto(termino);
    }
  }

  private filtrarProducto(termino: string){
    // console.log(this.productos);
    this.productosFIltrado=[];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod=>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)>= 0 ||tituloLower.indexOf(termino) >= 0){
        this.productosFIltrado.push(prod);
      }
    });
  }
}
