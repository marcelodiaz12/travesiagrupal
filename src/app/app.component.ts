import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mi perfil', url: '', icon: 'person-circle' },
    { title: 'Mis viajes', url: 'misviajes', icon: 'calendar' },
    { title: 'Mis amigos', url: 'misamigos', icon: 'people' },
    { title: 'Destinos populares', url: 'destinospopulares', icon: 'bus' },
    { title: 'Actividades favoritas', url: 'actividadesfavoritas', icon: 'balloon' },
    { title: 'Alojamientos con ofertas', url: 'alojamientosconofertas', icon: 'business' },
    { title: 'Restaurantes economicos', url: 'restauranteseconomicos', icon: 'restaurant' },
    { title: 'Vuelos en oferta', url: 'vuelosenoferta', icon: 'airplane' },
    { title: 'Ayuda', url: 'ayuda', icon: 'help-buoy' },  
  ];
  public labels = [ /*'Family', 'Friends', 'Notes'*/ ];
  constructor() {}
}
