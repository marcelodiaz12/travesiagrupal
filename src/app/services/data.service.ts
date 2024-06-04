import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 


@Injectable({
  providedIn: 'root'
})
export class DataService { 

  private usuarios = 'assets/db/usuarios.json';
  private viajes = 'assets/db/viajes.json';
  private destinos = 'assets/db/destinos.json';
  private alojamientos = 'assets/db/alojamientos.json';
  private actividades = 'assets/db/actividades.json';
  private restaurantes = 'assets/db/restaurantes.json';
  private vuelos = 'assets/db/vuelos.json';

  constructor(private http: HttpClient) { }

  getUsuarios() {    return this.http.get<any[]>(this.usuarios);  }
  getDestinos() {    return this.http.get<any[]>(this.destinos);  }
  getViajes() {    return this.http.get<any[]>(this.viajes);  }
  getAlojamientos() {    return this.http.get<any[]>(this.alojamientos);  }
  getActividades() {    return this.http.get<any[]>(this.actividades);  }
  getRestaurantes() {    return this.http.get<any[]>(this.restaurantes);  }
  getVuelos() {    return this.http.get<any[]>(this.vuelos);  }

   
  // Simulate adding a viaje locally
  addViaje(viaje: any) {
    // Get the current viajes from local storage or initialize an empty array
    const currentViajes = JSON.parse(localStorage['getViajes'] || '[]');
    // Add the new viaje to the array
    currentViajes.push(viaje);
    // Save the updated array back to local storage
    localStorage.setItem('viajes', JSON.stringify(currentViajes));
    console.log('Viaje added successfully');
  }
  
}
