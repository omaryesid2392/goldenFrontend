import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto, ProductoRegister } from '../modelo/producto'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private URL:string = 'https://golden-backend.herokuapp.com/api/productos/'

  constructor(private http: HttpClient) { }

  getProductos():Observable<any> {
    return this.http.get(this.URL);
  }

  getProducto(id:string):Observable<any> {
    return this.http.get(this.URL+id);
  }  

  guardarProducto(producto:Producto):Observable<any> {
    if (producto._id==null) {
      return this.http.post(this.URL, producto);  
    }
    else {
      return this.http.put(this.URL+'updateproducto/'+producto._id,  producto);   
    }
  }
  nuevoProducto(producto:ProductoRegister):Observable<any> {
      return this.http.post(this.URL+'createproducto', producto); 
  }

  eliminarProducto(id:string):Observable<any> {
    return this.http.delete(this.URL+'deleteproducto/' + id);
  }
}
