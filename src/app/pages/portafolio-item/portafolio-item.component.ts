import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/productor-descripcion.inteface';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.css']
})
export class PortafolioItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;
  constructor(private route: ActivatedRoute, public productoService: ProductosService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(params=>{
      //console.log(params['id']);
      this.productoService.getProductos(params['id'])
      .subscribe((producto:ProductoDescripcion)=>{
        this.producto = producto;
        this.id = params['id'];
        console.log(producto);
      });
    });
  }

}
