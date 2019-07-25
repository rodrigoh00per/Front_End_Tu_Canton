import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";

// COMPONENTES COMPARTIDOS

const routes: Routes = [
  { path: "clientes", component: ClientesComponent },
  { path: "usuarios/:equipo_id", component: UsuariosComponent },
  { path: "clientes/:equipo_id/:usuario_id", component: ClientesComponent },
  { path: "**", component: ClientesComponent }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
