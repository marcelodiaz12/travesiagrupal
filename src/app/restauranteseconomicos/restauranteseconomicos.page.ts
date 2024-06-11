import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service'; // Adjust the path as needed
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-restauranteseconomicos',
  templateUrl: './restauranteseconomicos.page.html',
  styleUrls: ['./restauranteseconomicos.page.scss'],
})
export class RestauranteseconomicosPage implements OnInit {

  public items: any[] = []; // Define la propiedad actividades
  public destinos: any[] = []; // Define la propiedad destinos
  // Variables para almacenar los selectores
  continenteSelect!: HTMLIonSelectElement; 
  paisSelect!: HTMLIonSelectElement;

  constructor(
    private dataService: DataService,
    public utils: UtilsService, 
    private http: HttpClient
  ) {} 
  
  // Función para agregar opciones a un elemento select
  agregarOpciones(selectElement: HTMLIonSelectElement, options: any[]) {
    options.forEach(option => {
      const optionElement = document.createElement('ion-select-option');
      optionElement.value = option.id.toString();
      optionElement.textContent = option.nombre;
      selectElement.appendChild(optionElement);
    });
  }
  
  // Función para actualizar las opciones del select de países
  actualizarPaises() {
    // Limpiar las opciones actuales del select de país
    this.paisSelect.innerHTML = '';

    // Obtener el valor seleccionado del continente
    const continenteSeleccionado = this.continenteSelect.value;

    // Buscar en el JSON de ubicaciones el continente seleccionado
    const continente = this.destinos.find(
      item => item.id === parseInt(continenteSeleccionado)
    );

    // Si se encuentra el continente
    if (continente) {
      // Agregar opciones de países basadas en el continente seleccionado
      this.agregarOpciones(this.paisSelect, continente.paises);
    }
  }
  ngOnInit() {
    
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getDestinos().subscribe(data => {
      this.destinos = data; // Asigna los datos a la propiedad destinos
    });
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getRestaurantes().subscribe(data => {
      this.items = data; // Asigna los datos a la propiedad items
    });
    this.ionViewDidEnter();
  }
 
  ionViewDidEnter() {
    // Obtener los selectores
    this.continenteSelect = document.getElementById('continente') as HTMLIonSelectElement;
    this.paisSelect = document.getElementById('pais') as HTMLIonSelectElement;

    // Agregar opciones iniciales de continentes al select de continente
    this.agregarOpciones(this.continenteSelect, this.destinos);

    // Escuchar cambios en el select de continente
    this.continenteSelect.addEventListener('ionChange', () => {
      this.actualizarPaises();
    });
  }

}
