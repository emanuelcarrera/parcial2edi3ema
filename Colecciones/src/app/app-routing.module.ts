import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './componentes/lista/lista.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ModificarProductoComponent } from './componentes/modificar-producto/modificar-producto.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
const routes: Routes = [
{path:'lista',component:ListaComponent},
{path:'producto',component:ProductoComponent},
{path:'login',component:LoginComponent},
{path:'altaproducto',component:AltaProductoComponent},
{path:'Edit',component:ModificarProductoComponent},
{path:'AltaUsuario',component:AltaUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

