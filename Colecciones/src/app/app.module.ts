import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ModificarProductoComponent } from './componentes/modificar-producto/modificar-producto.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { BuscarPipe } from './pipes/buscar.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ListaComponent,
    LoginComponent,
    AltaProductoComponent,
    ModificarProductoComponent,
    AltaUsuarioComponent,
    BuscarPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
      ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
