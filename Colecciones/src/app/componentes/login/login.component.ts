import { Component, Input, OnInit  } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { Router } from '@angular/router';
import {Usuario} from 'src/app/clase/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   pass:string;
   nombreU:string;
   

   
  constructor(private Api:ApiService, private router:Router) { 
    
    this.pass = "";
    this.nombreU = "";
  }

  ngOnInit(): void {
  }

  Registrarse(){
     
    this.router.navigate(["/AltaUsuario"]);
  }
  login(){
   
   console.log("hola");
   this.Api.login(this.nombreU,this.pass).subscribe(data => { let usuario : any = data ; 
    console.log(usuario[0]);
    if( usuario[0] != undefined ){
      window.sessionStorage.setItem('idangular',usuario[0].idUsuario);
      this.router.navigate(["/lista"]);

    }else{
      alert("usuario o contraseña incorrectos");
    }   });
    
  }

}
