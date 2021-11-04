import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs';
import { ApiService } from 'src/app/helpers/api.service';
import {Usuario} from 'src/app/clase/usuario'

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  public usuario:Usuario;
  public pasa:number;
  constructor(private api:ApiService, private router:Router) {
    this.usuario = new Usuario;
    this.pasa = 0;
  }

  ngOnInit(): void {
  }
  altaUsuario(){
     
    if(this.usuario.Nombre == "" || this.usuario.Nombre == null )
    {
      this.pasa = 1;

      alert("el campo nombre usario es obligatorio");
    }

    if(this.usuario.pass == "" || this.usuario.pass == null )
    {
      this.pasa = 1;

      alert("el campo password usario es obligatorio");
    }

    if(this.pasa == 0){
    this.api.validarNombre(this.usuario.Nombre).subscribe(valid=>{ let validar: any = valid
       console.log(validar[0].valid);

       if(validar[0].valid == 0)
       {
          this.api.altaUsuario(this.usuario).subscribe(data=>{
          console.log(data);
          
           });
            alert("Usuario creada");
       }
       else{
        alert("El nomre de usuario ya existe");
       }
    
    })

    }
    this.pasa = 0;

  }
}
