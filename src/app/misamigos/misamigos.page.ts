import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service'; // Adjust the path as needed
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-misamigos',
  templateUrl: './misamigos.page.html',
  styleUrls: ['./misamigos.page.scss'],
})
export class MisamigosPage implements OnInit {

  public items: any[] = []; // Define la propiedad actividades
  public destinos: any[] = []; // Define la propiedad destinos

  constructor(
    private dataService: DataService,
    public utils: UtilsService, 
    private http: HttpClient
  ) {}
  
  ngOnInit() {  
    this.dataService.getDestinos().subscribe(data => {
      this.destinos = data; // Assign the data to the destinos property
    }); 
    this.dataService.getUsuarios().subscribe(data => {
      this.items = data; // Assign the data to the items property
    });
  } 
}
