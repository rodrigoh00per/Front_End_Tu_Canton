import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TucantonService {
  private url = "http://localhost:3000/api/";

  constructor(private _http: HttpClient) {}

  getUsuariosEquipo(equipo_id: String): Observable<any> {
    return this._http.get(`${this.url}usuarios/equipos/${equipo_id}`);
  }

  getClienteEquipoUsuario(equipo_id, usuario_id): Observable<any> {
    return this._http.get(`${this.url}clientes/${equipo_id}/${usuario_id}`);
  }
  getEquipos(): Observable<any> {
    return this._http.get(`${this.url}equipos`);
  }
}
