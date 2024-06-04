import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../utils.service'; 
import { SelectionService } from '../../selection.service';
import { DataService } from '../../services/data.service';// Adjust the path as needed

@Component({
  selector: 'app-destino',
  templateUrl: './destino.page.html',
  styleUrls: ['./destino.page.scss'],
})
export class DestinoPage implements OnInit {
  public destinos: any[] = []; // Define la propiedad destinos
  paisSelect!: HTMLIonSelectElement;

  constructor(
    private dataService: DataService,
    private selectionService: SelectionService,
    public utils: UtilsService, 
    private http: HttpClient) { }

  ngOnInit() { // Cargar los datos desde un archivo JSON o una API
    this.dataService.getDestinos().subscribe(data => {
      this.destinos = data; // Asigna los datos a la propiedad destinos
    }); 
  }
  onCheckboxChange(destinoId: number, isChecked: boolean) {
    if (isChecked) {
      this.selectionService.setIdUbicacion(destinoId);
    } else {
      // Reset the id_ubicacion if unchecked (or handle it as needed)
      if (this.selectionService.getViaje().id_ubicacion === destinoId) {
        this.selectionService.setIdUbicacion(0);
      }
    }
  }

}
