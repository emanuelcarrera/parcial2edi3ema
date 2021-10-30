import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  productos: any;
  
  constructor(private Api:ApiService) {
    
  }

  ngOnInit(): void {

      this.Api.traerConGet().subscribe(data => {
        this.productos = data;
      });

    }

}
