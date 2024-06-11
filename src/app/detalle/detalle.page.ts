import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html', // Ajusta la ruta según tu estructura
  styleUrls: ['./detalle.page.scss'] // Ajusta la ruta según tu estructura
})
export class DetallePage implements OnInit {
  viajeId: number | null = null;
  viaje: any | null = null; 
  public usuarios: any[] = []; // Define la propiedad usuarios
  public destinos: any[] = []; // Define la propiedad destinos
  public vuelos: any[] = []; // Define la propiedad viajes
  public alojamientos: any[] = []; // Define la propiedad destinos
  selectedRestaurantes: any[] = [];
  selectedActividades: any[] = []; 

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.viajeId = +id;
        this.loadViajeDetails();
      } else {
        console.error('El parámetro de ID del viaje es nulo');
      }
    });
    
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getVuelos().subscribe(data => {
      this.vuelos = data; // Asigna los datos a la propiedad items
    });
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getAlojamientos().subscribe(data => {
      this.alojamientos = data; // Asigna los datos a la propiedad items
    });
    this.dataService.getDestinos().subscribe(data => {
      this.destinos = data; // Assign the data to the destinos property
    }); 
    this.dataService.getUsuarios().subscribe(data => {
      this.usuarios = data; // Assign the data to the items property
    }); 
  }

  getVueloNombre(itemId: number): string {
    const vuelo = this.vuelos.find(d => d.id === itemId);
    return vuelo ? vuelo.aerolinea : '';
  }
  getAlojamientoNombre(itemId: number): string {
    const alojamiento = this.alojamientos.find(d => d.id === itemId);
    return alojamiento ? alojamiento.nombre : '';
  }
  getAlojamientoFoto(itemId: number): string {
    const alojamiento = this.alojamientos.find(d => d.id === itemId);
    return alojamiento ? alojamiento.foto : '';
  }
  getUsuarioNombre(itemId: number): string {
    const usuario = this.usuarios.find(d => d.id === itemId);
    return usuario ? usuario.name + " " + usuario.apellido : ''; 
  } 
  getUsuarioFoto(itemId: number): string {
    const usuario = this.usuarios.find(d => d.id === itemId);
    return usuario ? usuario.foto : ''; 
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
  loadViajeDetails() {
    if (this.viajeId !== null) {
      this.dataService.getViajes().subscribe(data => {
        this.viaje = data.find(viaje => viaje.id_viaje === this.viajeId);
        if (this.viaje) {
          this.loadRelatedData();
        } else {
          console.error('No se encontró el viaje con el ID proporcionado');
        }
      });
    }
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
  loadRelatedData() {
    if (this.viaje) {
      this.dataService.getRestaurantes().subscribe(data => {
        this.selectedRestaurantes = data.filter(restaurante =>
          this.viaje.id_restaurantes.includes(restaurante.id)
        );

        if (this.selectedRestaurantes.length === 0) {
          this.selectedRestaurantes.push({ nombre: 'No seleccionados' });
        }
      });

      this.dataService.getActividades().subscribe(data => {
        this.selectedActividades = data.filter(actividad =>
          this.viaje.id_actividades.includes(actividad.id)
        );

        if (this.selectedActividades.length === 0) {
          this.selectedActividades.push({ nombre: 'No seleccionados' });
        }
      });
 

      
    }
  }
}
