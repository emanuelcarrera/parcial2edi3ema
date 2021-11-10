import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { ApiService } from 'src/app/helpers/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  productos: any;
  filtrar:any;
  
  constructor(private Api:ApiService,private router:Router) {
    
  }

  ngOnInit(): void {

      this.Api.traerConGet().subscribe(data => {
        this.productos = data;
      });

    }
    Nuevo(){

      this.router.navigate(["/altaproducto"]);
    }

}
