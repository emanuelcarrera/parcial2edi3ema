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

  constructor(private Api:ProductoService, private router:Router,) { 
    this.producto = new Producto;
  }


  ngOnInit(): void {
  }
  //onUpload(e:Event){
  //    console.log(e)
      
  //}

  altaProducto(){

    this.producto.idUsuario = localStorage.getItem('idangular'); 

    this.Api.AltaPost(this.producto).subscribe(data =>{

      
    })

  }
}
