import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service'; // Adjust the path as needed
import { DataService } from '../services/data.service';
import { SelectionService } from '../selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.page.html',
  styleUrls: ['./votacion.page.scss'],
})
export class VotacionPage implements OnInit {
  public viajes: any[] = [];
  public viaje: any;
  public destinos: any[] = [];
  public restaurantes: any[] = [];
  public actividades: any[] = [];
  selectedRestaurantes: any[] = [];
  selectedActividades: any[] = [];
  public restaurantesNombre: any;
  public actividadesNombre: any;
  public selectedViajeId: number | null = null;
  public selectedViaje: any = null;
  constructor(
    private router: Router,
    private dataService: DataService,
    public utils: UtilsService, 
    private http: HttpClient,
    private selectionService: SelectionService) { }

  ngOnInit() {

    this.dataService.getViajes().subscribe(data => {
      this.viajes = data;
    });

    this.dataService.getDestinos().subscribe(data => {
      this.destinos = data;
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
  gotodetalle(){
    
    this.router.navigate(['/detalle', this.selectedViajeId]);
  }
  onViajeChange(event: any) { 
    this.selectedViajeId = event.detail.value; // Correctly get the selected viaje ID
    this.selectedViaje = this.viajes.find(viaje => viaje.id_viaje === this.selectedViajeId); // Find the selected viaje
  
    if (this.selectedViaje) {
      console.log('Selected viaje:', this.selectedViaje);
  
      this.dataService.getRestaurantes().subscribe(data => {
        this.restaurantes = data;
        this.selectedRestaurantes = this.restaurantes.filter(restaurante => 
          this.selectedViaje.id_restaurantes.includes(restaurante.id)
        );
  
        if (this.selectedRestaurantes.length === 0) {
          this.selectedRestaurantes.push({ nombre: 'No seleccionados' });
        }
  
        console.log('Selected Restaurantes:', this.selectedRestaurantes);
      });
  
      this.dataService.getActividades().subscribe(data => {
        this.actividades = data;
        this.selectedActividades = this.actividades.filter(actividad => 
          this.selectedViaje.id_actividades.includes(actividad.id)
        );
  
        if (this.selectedActividades.length === 0) {
          this.selectedActividades.push({ nombre: 'No seleccionados' });
        }
  
        console.log('Selected Actividades:', this.selectedActividades);
      });
    } else {
      console.error('Selected viaje not found');
    }
  }
  
}
