import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TucantonService } from "src/app/services/tucanton.service";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.css"]
})
export class ClientesComponent implements OnInit {
  private equipo_id: String;
  private usuario_id: String;
  private clientes: Array<any>;

  equipos: Array<any>;
  usuarios: Array<any>;
  seleccionEquipos: String = "Equipos";
  seleccionUsuarios: String = "Usuarios";

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _tucantonService: TucantonService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.equipo_id = params.equipo_id;
      this.usuario_id = params.usuario_id;
    });
  }

  ngOnInit() {
    if (this.equipo_id !== undefined && this.usuario_id !== undefined) {
      this.getClienteEquipoUsuario();
    }
    this._tucantonService.getEquipos().subscribe(
      respuesta => {
        this.equipos = respuesta.equipos;
      },
      () => {},
      () => {
        console.log(this.equipos);
      }
    );
  }
  getClienteEquipoUsuario() {
    this._tucantonService
      .getClienteEquipoUsuario(this.equipo_id, this.usuario_id)
      .subscribe(
        resp => {
          this.clientes = resp.respuestaCliente;
        },
        () => {},
        () => {
          console.log(this.clientes);
        }
      );
  }
  escogerEquipo(equipo) {
    console.log(equipo.id);
    this.equipo_id = equipo.id;
    this.seleccionEquipos = equipo.nombre;
    this._tucantonService.getUsuariosEquipo(equipo.id).subscribe(resp => {
      this.usuarios = resp.equipos_usuario;
    });
  }
  escogerUsuario(usuario) {
    console.log(usuario.id);
    this.usuario_id = usuario.id;
    console.log(this.seleccionUsuarios);
    this.seleccionUsuarios = usuario.nombre;
    this.getClienteEquipoUsuario();
  }
}
