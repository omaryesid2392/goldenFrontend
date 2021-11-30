import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto, ProductoRegister } from '../modelo/producto';
import { ProductosService } from '../servicio/productos.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {


  productoForm : FormGroup;

  constructor(private toastr: ToastrService, private  fb: FormBuilder, private router : Router, private productosSvc:ProductosService) { 
    this.productoForm = fb.group({
      nombre :['',Validators.required],
      cantidad :['',Validators.required],
      codigo :['',Validators.required],
      valorVenta :['',Validators.required],
      valorCompra :['',Validators.required],
    })
    
  }

  ngOnInit(): void {
    this.limpiarForme()
  }
  limpiarForme(){
   this.productoForm.reset({
    nombre :[''],
    cantidad :[''],
    codigo :[''],
    valorVenta :[''],
    valorCompra :[''],

   });

  }
  nuevoProducto(){
    const productoNuevo : ProductoRegister={
      nombre: this.productoForm.get('nombre')?.value,
      cantidad: this.productoForm.get('cantidad')?.value,
      valorCompra: this.productoForm.get('valorCompra')?.value,
      valorVenta: this.productoForm.get('valorVenta')?.value,
      codigo: this.productoForm.get('codigo')?.value,
    }
    console.log(productoNuevo);
    this.toastr.success('Producto registrado con Exito!', 'Producto Nuevo!');
    this.productosSvc.nuevoProducto(productoNuevo).subscribe(data=>{
      console.log('El producto fue registrado con exito!');
      this.router.navigate(['/productos/nuevo']);
    }, error => {
      console.log(error);
    })
  } 
}
