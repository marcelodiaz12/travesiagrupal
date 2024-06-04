import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SelectionService } from '../../selection.service';
import { UtilsService } from '../../utils.service'; // Adjust the path as needed
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  public viaje: any;
  public destinos: any[] = [];
  public vuelos: any[] = []; 
  public alojamientos: any[] = [];
  public participantes: any[] = [];
  public restaurantes: any[] = [];
  public actividades: any[] = [];
  selectedRestaurantes: any[] = [];
  selectedActividades: any[] = [];
  selectedUsuarios: any[] = [];
  selectedVuelos: any[] = [];

  public ubicacionNombre: any;
  public vueloidaFecha: any;
  public vuelovueltaFecha: any;
  public alojamientoNombre: any;
  public participantesNombre: any;
  public restaurantesNombre: any;
  public actividadesNombre: any;
  
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private dataService: DataService,   
    public utils: UtilsService, 
    private selectionService: SelectionService) { }

  currentUser: any;

 ngOnInit() {
  this.viaje = this.selectionService.getViaje();

  this.currentUser = this.authService.getCurrentUser();
  if (!this.currentUser) {
    // Redirect to login if no user is logged in
    this.router.navigate(['/login']);
  }
  this.dataService.getDestinos().subscribe(data => {
    this.destinos = data;
    console.log(this.destinos); // You can access and use the destinos array here

    // Assuming this.viaje.id_ubicacion contains the ID of the desired ubicación
    const ubicacionId = this.viaje.id_ubicacion;
    const ubicacion = this.destinos.find(destino => destino.id == ubicacionId); 
    this.ubicacionNombre = ubicacion ? ubicacion.nombre : 'Cualquier lugar'; // Set ubicacionNombre to the ubicación's name, or 'Unknown' if not found
  
  }); 

  this.dataService.getVuelos().subscribe(data => {
    this.vuelos = data;
    console.log(this.vuelos); // You can access and use the destinos array here

    // Assuming this.viaje.id_ubicacion contains the ID of the desired ubicación
    const vueloId = this.viaje.id_vuelo_ida;
    const vuelo = this.vuelos.find(vuelo => vuelo.id == vueloId); 
    this.vueloidaFecha = vuelo ? vuelo.fecha : 'Cualquier fecha'; // Set ubicacionNombre to the ubicación's name, or 'Unknown' if not found
  
  }); 

  this.dataService.getVuelos().subscribe(data => {
    this.vuelos = data;
    console.log(this.vuelos); // You can access and use the destinos array here

    // Assuming this.viaje.id_ubicacion contains the ID of the desired ubicación
    const vueloId = this.viaje.id_vuelo_vuelta;
    const vuelo = this.vuelos.find(vuelo => vuelo.id == vueloId); 
    this.vuelovueltaFecha = vuelo ? vuelo.fecha : 'Cualquier fecha'; // Set ubicacionNombre to the ubicación's name, or 'Unknown' if not found
  
  }); 

  this.dataService.getAlojamientos().subscribe(data => {
    this.alojamientos = data;
    console.log(this.alojamientos); // You can access and use the destinos array here

    // Assuming this.viaje.id_ubicacion contains the ID of the desired ubicación
    const alojamientoId = this.viaje.id_alojamiento;
    const alojamiento = this.alojamientos.find(alojamiento => alojamiento.id == alojamientoId); 
    this.alojamientoNombre = alojamiento ? alojamiento.nombre : 'No seleccionado'; // Set ubicacionNombre to the ubicación's name, or 'Unknown' if not found
  
  });  
  this.dataService.getRestaurantes().subscribe(data => {
    console.log('Restaurantes data:', data);
    this.restaurantes = data;

    this.selectedRestaurantes = this.restaurantes.filter(restaurante => 
      this.viaje.id_restaurantes.includes(restaurante.id)
    );

    if (this.selectedRestaurantes.length === 0) {
      this.selectedRestaurantes.push({ nombre: 'No seleccionados' });
    }

    console.log('Selected Restaurantes:', this.selectedRestaurantes);
  }); 


  this.dataService.getUsuarios().subscribe(data => {
    console.log('Usuarios data:', data);
    this.participantes = data;

    this.selectedUsuarios = this.participantes.filter(usuario => 
      this.viaje.id_usuarios.includes(usuario.id)
    );

    if (this.selectedUsuarios.length === 0) {
      this.selectedUsuarios.push({ nombre: 'No seleccionados' });
    }

    console.log('Selected Usuarios:', this.selectedUsuarios);
  }); 


  this.dataService.getActividades().subscribe(data => {
    console.log('Actividades data:', data);
    this.actividades = data;

    this.selectedActividades = this.actividades.filter(actividad => 
      this.viaje.id_actividades.includes(actividad.id)
    );

    if (this.selectedActividades.length === 0) {
      this.selectedActividades.push({ nombre: 'No seleccionados' });
    }

    console.log('Selected Actividades:', this.selectedActividades);
  }); 
 
 
}

  finalizeViaje() {
    // Fetch the current viaje data
    const viaje = this.selectionService.getViaje();

    // Get the highest id_viaje from the existing viajes and increment it
    this.dataService.getViajes().subscribe(viajes => {
      const highestId = viajes.reduce((max, v) => (v.id_viaje > max ? v.id_viaje : max), 0);
      viaje.id_viaje = highestId + 1;

      // Add the new viaje
      this.dataService.addViaje(viaje);

      // Optionally, reset the viaje state
      this.selectionService.resetViaje();
    });
  }
}
