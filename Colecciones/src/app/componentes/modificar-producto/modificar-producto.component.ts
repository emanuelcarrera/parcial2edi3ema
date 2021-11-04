import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ProductoService } from 'src/app/helpers/producto.service';
import { from } from 'rxjs';
import { Producto } from 'src/app/clase/producto';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  constructor(private Api:ProductoService, private router:Router) { }
  producto!: Producto;
  ngOnInit(): void {
    this.producto = this.Api.productoModificar;
  }

  Guardar()
  {
     console.log(this.producto);
     this.Api.EditarPost(this.producto).subscribe(data =>{  
      alert("Modificacion correcta");
       console.log(data);
    })
  }
}
