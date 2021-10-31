import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../clase/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private clienteHttp: HttpClient ) { }


  AltaPost(Producto:Producto){
    console.log(Producto);
   return this.clienteHttp.post('http://localhost:777/Articulo/AltaAngular', {nombre: 'QQ', descripcion: 'QQ', calificacion: 'QQ', valor: '1', idUsuario: '31'});
  }

  

}