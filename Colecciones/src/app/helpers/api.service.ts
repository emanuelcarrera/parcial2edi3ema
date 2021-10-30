import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private clienteHttp: HttpClient ) { }
   traerConGet(){
   return this.clienteHttp.get('http://localhost:777/Articulo/TodosLosArticulos');
  }
  
  login(nombre : string , pass : string ){
    console.log('http://localhost:777/Usuarios/Login/'+nombre+"/"+pass)
    return this.clienteHttp.get('http://localhost:777/Usuarios/Login/'+nombre+"/"+pass);
  }


}