import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../utils.service'; // Adjust the path as needed
import { SelectionService } from '../../selection.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {
  public items: any[] = []; // Define la propiedad actividades

  constructor(
    private dataService: DataService,
    private selectionService: SelectionService,
    public utils: UtilsService, 
    private http: HttpClient) { }

  ngOnInit() {
    // Cargar los datos desde un archivo JSON o una API
    this.dataService.getRestaurantes().subscribe(data => {
      this.items = data; // Asigna los datos a la propiedad items
    });
  }


  onCheckboxChange(restaurantesId: number, isChecked: boolean) {
    if (isChecked) {
      this.selectionService.addRestaurante(restaurantesId); 
    } else {
      // Remove the user from the list if unchecked
      const index = this.selectionService.getViaje().id_restaurantes.indexOf(restaurantesId);
      if (index > -1) {
        this.selectionService.getViaje().id_restaurantes.splice(index, 1);
      }
    }
  }
}
