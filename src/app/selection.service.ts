import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private viaje = {
    id_viaje: 0,
    id_ubicacion: 0,
    id_vuelo_ida: 0,
    id_vuelo_vuelta: 0,
    id_usuarios: [] as number[],
    id_organizador: 0,
    id_alojamiento: 0,
    id_restaurantes: [] as number[],
    id_actividades: [] as number[]
  };

  constructor() { }

  setIdViaje(id: number) {
    this.viaje.id_viaje = id;
  }

  setIdUbicacion(id: number) {
    this.viaje.id_ubicacion = id;
  }

  setIdVueloIda(id: number) {
    this.viaje.id_vuelo_ida = id;
  }

  setIdVueloVuelta(id: number) {
    this.viaje.id_vuelo_vuelta = id;
  }

  addUser(id: number) {
    this.viaje.id_usuarios.push(id);
  }

  setIdOrganizador(id: number) {
    this.viaje.id_organizador = id;
  }

  setIdAlojamiento(id: number) {
    this.viaje.id_alojamiento = id;
  }

  addRestaurante(id: number) {
    this.viaje.id_restaurantes.push(id);
  }

  addActividad(id: number) {
    this.viaje.id_actividades.push(id);
  }

  getViaje() {
    return this.viaje;
  }

  resetViaje() {
    this.viaje = {
      id_viaje: 0,
      id_ubicacion: 0,
      id_vuelo_ida: 0,
      id_vuelo_vuelta: 0,
      id_usuarios: [],
      id_organizador: 0,
      id_alojamiento: 0,
      id_restaurantes: [],
      id_actividades: []
    };
  }
}
