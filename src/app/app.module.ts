import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { appRouting } from "./app.routing";
import { MenuComponent } from './components/shared/menu/menu.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ClientesComponent, MenuComponent, UsuariosComponent],
  imports: [BrowserModule, appRouting,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
