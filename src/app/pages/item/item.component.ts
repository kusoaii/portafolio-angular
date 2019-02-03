import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

   public producto;
   public id : string;

  constructor(
    private route : ActivatedRoute,
    private productoService : ProductosService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      parametros =>{
        this.id = parametros['id'];
        console.log(parametros['id']);
        this.productoService.getProducto(parametros['id']).subscribe(
          response =>{
            this.producto = response;
          }
        );
      }
    )
  }

}
