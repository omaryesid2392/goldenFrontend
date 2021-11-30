import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service'
import { Producto } from '../modelo/producto'
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'productos-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ProductosListadoComponent implements OnInit {


  idProductoEliminar:string|null = null
  nombreProductoEliminar:string = ""
  datoBuscar:string = ""

  page:number = 1;
  pageSize:number = 10;
  collectionSize:number = 0;

  productos:Producto[] = [];

  constructor(private productosSvc:ProductosService, private router:Router) { }

  ngOnInit(): void {  
    this.cargarProductos()
  }
  buscarProductos(clean:boolean):void {
    if (clean) {
      this.datoBuscar = ""
    }
    this.cargarProductos2()
  }

  cargarProductos():void {
    this.productosSvc.getProductos().subscribe(data=>{
      console.log(data)
      this.productos = data
    })
    this.collectionSize = this.productos.length
  }
  cargarProductos2():void {
    console.log(this.datoBuscar)
    this.productosSvc.getProductos().subscribe(data=>{
      const listaTemp:Producto[] = data
      const dbusc = this.cambiarMinusculasyTildes(this.datoBuscar)
      this.productos = listaTemp.filter(prod=>this.cambiarMinusculasyTildes(prod.nombre+" "+prod.codigo+" "+prod.cantidad).includes(dbusc))
    },
    err=>{console.log(err)}
    )
    this.collectionSize = this.productos.length
  }
  cambiarMinusculasyTildes(textoCambiar:string):string {
    return textoCambiar.toLowerCase().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u');
  }
  
  setProductoEliminar(id:string|null, nombre:string) {
    this.idProductoEliminar = id==''? null : id
    this.nombreProductoEliminar = nombre
  }

  eliminarProducto() {
    if (this.idProductoEliminar!=null) {
      this.productosSvc.eliminarProducto(this.idProductoEliminar).subscribe(data=>{
        console.log('El producto fue eliminado con exito!');
        this.router.navigate(['/productos']);
      }, error => {
        console.log(error);
      })
    }
  }
}
