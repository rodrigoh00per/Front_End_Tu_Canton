import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TucantonService } from "src/app/services/tucanton.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit {
  private equipo_id: String;
  equipos_usuario: Array<any>;
  private bandera: Boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _tucantonService: TucantonService
  ) {
    this.equipos_usuario = [];
    this.bandera = false;
    this._activatedRoute.params.subscribe(params => {
      this.equipo_id = params.equipo_id;
    });
  }

  ngOnInit() {
    this._tucantonService.getUsuariosEquipo(this.equipo_id).subscribe(
      resp => {
        this.equipos_usuario = resp.equipos_usuario;
      },
      () => {},
      () => {
        this.bandera = true;
        console.log(this.equipos_usuario);
      }
    );
  }
}
