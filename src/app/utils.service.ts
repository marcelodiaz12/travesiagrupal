import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  // Variables para almacenar los selectores
  continenteSelect!: HTMLIonSelectElement;
  paisSelect!: HTMLIonSelectElement;
  
  public items: any[] = []; // Define la propiedad actividades
  public destinos: any[] = []; // Define la propiedad destinos
  

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {}

  getStars(valoracion: number): any[] {
    return new Array(valoracion);
  }
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
  getNombre(itemId: number): string { 
    const item = this.items.find(d => d.id === itemId);
    return item ? item.nombre : '';
  }
}
