import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clase/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto!:Producto;
  constructor() { }

  ngOnInit(): void {
  }

 
}
