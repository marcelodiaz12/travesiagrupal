import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../utils.service'; // Adjust the path as needed
import { SelectionService } from '../../selection.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {
  public items: any[] = []; // Define la propiedad actividades

  constructor(
    private dataService: DataService,
    private selectionService: SelectionService,
    public utils: UtilsService, 
    private http: HttpClient) { }

  ngOnInit() {
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getActividades().subscribe(data => {
      this.items = data; // Asigna los datos a la propiedad items
    });
  }

  onCheckboxChange(actividadesId: number, isChecked: boolean) {
    if (isChecked) {
      this.selectionService.addActividad(actividadesId); 
    } else {
      // Remove the user from the list if unchecked
      const index = this.selectionService.getViaje().id_actividades.indexOf(actividadesId);
      if (index > -1) {
        this.selectionService.getViaje().id_actividades.splice(index, 1);
      }
    }
  }
}
