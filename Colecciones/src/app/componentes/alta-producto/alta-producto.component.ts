import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ProductoService } from 'src/app/helpers/producto.service';
import { from } from 'rxjs';
import { Producto } from 'src/app/clase/producto';



@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {
    
  public producto:Producto;
  public valid:number;

  constructor(private Api:ProductoService, private router:Router,) { 
    this.producto = new Producto;
    this.valid = 0;
  }


  ngOnInit(): void {
  }

  altaProducto(){

    this.producto.idUsuario = localStorage.getItem('idangular'); 

    if(this.producto.Nombre == null || this.producto.Nombre == "")
    {

      this.valid = 1
    }

    if(this.producto.Valor == null || this.producto.Valor == "")
    {

      this.valid = 1
    }

    if(this.producto.Descripcion == null || this.producto.Descripcion == "")
    {
      this.valid = 1
      
    }

    if(this.valid == 0){
    this.Api.AltaPost(this.producto).subscribe(data =>{

      alert("Producto creado");
    })
    }
    else{

      alert("Debe completar todos los campos");
      this.valid = 0;
    }

  }
}
