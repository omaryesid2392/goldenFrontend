import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service'
import { Producto } from '../modelo/producto'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'productos-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class ProductosRegistroComponent implements OnInit {

  idProducto:string|null = null
  txtNombre:string = ""
  txtCodigo:string = ""
  txtCantidad:number = 0
  txtValorCompra:number = 0
  txtValorVenta:number = 0

  constructor(private productosSvc:ProductosService, private router:Router, private aRouter: ActivatedRoute) { 
    this.idProducto = this.aRouter.snapshot.paramMap.get('id');  
  }

  ngOnInit(): void {
    this.cargarProducto()
  }

  cargarProducto():void {
    if (this.idProducto == null) {
      this.txtNombre = ""
      this.txtCodigo = ""
      this.txtCantidad = 0
      this.txtValorCompra = 0      
      this.txtValorVenta = 0      
    }
    else {
      this.productosSvc.getProducto(this.idProducto).subscribe(data=>{
        this.txtNombre = data.nombre
        this.txtCantidad = data.cantidad
        this.txtCodigo = data.codigo
        this.txtValorCompra = data.valorCompra
        this.txtValorVenta = data.valorVenta
      })
    } 
  }

  guardarProducto():void {
    const producto:Producto = {
      _id: this.idProducto,
      nombre: this.txtNombre,
      cantidad: this.txtCantidad,
      valorCompra: this.txtValorCompra,
      valorVenta: this.txtValorVenta,
      codigo: this.txtCodigo,
    }
    this.productosSvc.guardarProducto(producto).subscribe(data=>{
      console.log('El producto fue registrado con exito!');
      this.router.navigate(['/productos']);
    }, error => {
      console.log(error);
    })
  }  
}
