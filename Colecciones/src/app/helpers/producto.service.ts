import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private clienteHttp: HttpClient ) { }


  traerConGet(){
   return  this.clienteHttp.get('http://localhost:777/Articulo/TodosLosArticulos');
  }

  
  traerConPost(){
    let a = new FormData()
    return  this.clienteHttp.post('http://localhost/provincias/Backend/',a);
   }

}