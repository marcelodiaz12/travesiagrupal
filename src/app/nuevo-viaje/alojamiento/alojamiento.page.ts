import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../utils.service'; // Adjust the path as needed
import { SelectionService } from '../../selection.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.page.html',
  styleUrls: ['./alojamiento.page.scss'],
})
export class AlojamientoPage implements OnInit {
  public items: any[] = []; // Define la propiedad actividades

  constructor(
    private dataService: DataService,
    private selectionService: SelectionService,
    public utils: UtilsService, 
    private http: HttpClient) { }

  ngOnInit() {
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getAlojamientos().subscribe(data => {
      this.items = data; // Asigna los datos a la propiedad items
    });
  }
  onCheckboxChangeForAlojamiento(alojamientoId: number, isChecked: boolean) {
    if (isChecked) {
      this.selectionService.setIdAlojamiento(alojamientoId);
    } else {
      // Unset the id_alojamiento if unchecked
      if (this.selectionService.getViaje().id_alojamiento === alojamientoId) {
        this.selectionService.setIdAlojamiento(0);
      }
    }
  }

}
 