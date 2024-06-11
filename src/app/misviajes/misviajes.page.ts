import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service'; // Adjust the path as needed
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-misviajes',
  templateUrl: './misviajes.page.html',
  styleUrls: ['./misviajes.page.scss'],
})
export class MisviajesPage implements OnInit {

  public usuarios: any[] = []; // Define la propiedad usuarios
  public destinos: any[] = []; // Define la propiedad destinos
  public viajes: any[] = []; // Define la propiedad viajes
  public vuelos: any[] = []; // Define la propiedad viajes
  public alojamientos: any[] = []; // Define la propiedad destinos
  public actividades: any[] = []; // Define la propiedad viajes
  public restaurantes: any[] = []; // Define la propiedad viajes
  public selectedViajeId: number | undefined;

  constructor(
    private dataService: DataService,
    private router: Router,
    public utils: UtilsService, 
    private http: HttpClient) { }

  ngOnInit() {
    
    this.dataService.getDestinos().subscribe(data => {
      this.destinos = data; // Assign the data to the destinos property
    }); 
    this.dataService.getUsuarios().subscribe(data => {
      this.usuarios = data; // Assign the data to the items property
    });  
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getViajes().subscribe(data => {
      this.viajes = data; // Asigna los datos a la propiedad items
    });
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getVuelos().subscribe(data => {
      this.vuelos = data; // Asigna los datos a la propiedad items
    });
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getAlojamientos().subscribe(data => {
      this.alojamientos = data; // Asigna los datos a la propiedad items
    });
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getActividades().subscribe(data => {
      this.actividades = data; // Asigna los datos a la propiedad items
    });
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getRestaurantes().subscribe(data => {
      this.restaurantes = data; // Asigna los datos a la propiedad items
    });
    
  
  }  
  getDestinoNombre(itemId: number): string {
    for (const destino of this.destinos) {
      if (destino.paises) {
        for (const pais of destino.paises) {
          if (pais.id === itemId) {
            return pais.nombre;
          }
        }
      }
    }
    return '';
  }
  getVueloNombre(itemId: number): string {
    const vuelo = this.vuelos.find(d => d.id === itemId);
    return vuelo ? vuelo.aerolinea : '';
  }
  getAlojamientoNombre(itemId: number): string {
    const alojamiento = this.alojamientos.find(d => d.id === itemId);
    return alojamiento ? alojamiento.nombre : '';
  }
  getActividadNombre(itemIds: number[]): string {
    const nombres = itemIds
    .map(itemId => {
      const actividad = this.actividades.find(d => d.id === itemId);
      return actividad ? actividad.nombre : '';

    })
      .filter(nombre => nombre !== ''); // Filter out empty names

    return nombres.join(', '); // Join names with a comma and space
  }
  getRestaurantNombre(itemIds: number[]): string {
    const nombres = itemIds
    .map(itemId => {
      const restaurant = this.restaurantes.find(r => r.id === itemId);
      return restaurant ? restaurant.nombre : '';
    })
    .filter(nombre => nombre !== ''); // Filter out empty names

  return nombres.join(', '); // Join names with a comma and space
  } 
  getUsuarioNombre(itemId: number): string {
    const usuario = this.usuarios.find(d => d.id === itemId);
    return usuario ? usuario.name + " " + usuario.apellido : ''; 
  } 
  getAmigosNombre(itemIds: number[]): string {
    const nombres = itemIds
    .map(itemId => {
      const usuario = this.usuarios.find(r => r.id === itemId);
      return usuario ? usuario.name : '';
    })
    .filter(name => name !== ''); // Filter out empty names

  return nombres.join(', '); // Join names with a comma and space
  } 
  
  gotodetalle(viajeId: number | undefined) {
    if (viajeId !== undefined) {
      this.router.navigate(['/detalle', viajeId]);
    } else {
      console.error('viajeId is undefined');
    }
  }
  
}


 