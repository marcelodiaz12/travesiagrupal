import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../utils.service'; // Adjust the path as needed
import { SelectionService } from '../../selection.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.page.html',
  styleUrls: ['./vuelo.page.scss'],
})
export class VueloPage implements OnInit {
  public items: any[] = []; // Define la propiedad actividades

  constructor(
    private dataService: DataService,
    private selectionService: SelectionService,
    public utils: UtilsService, 
    private http: HttpClient) { }

  ngOnInit() {
      // Cargar los datos desde un archivo JSON o una API
    this.dataService.getVuelos().subscribe(data => {
        this.items = data; // Asigna los datos a la propiedad items
      });
  }
  onCheckboxChangeForVueloIda(vueloId: number, isChecked: boolean) {
    if (isChecked) {
      this.selectionService.setIdVueloIda(vueloId);
    } else {
      // Unset the id_vuelo_ida if unchecked
      if (this.selectionService.getViaje().id_vuelo_ida === vueloId) {
        this.selectionService.setIdVueloIda(0);
      }
    }
  }
  onCheckboxChangeForVueloVuelta(vueloId: number, isChecked: boolean) {
    if (isChecked) {
      this.selectionService.setIdVueloVuelta(vueloId);
    } else {
      // Unset the id_vuelo_vuelta if unchecked
      if (this.selectionService.getViaje().id_vuelo_vuelta === vueloId) {
        this.selectionService.setIdVueloVuelta(0);
      }
    }
  }

}
