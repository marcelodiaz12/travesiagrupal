import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentUser: any;
  public appPages = [
    { title: 'Mi perfil', url: 'folder', icon: 'person-circle' },
    { title: 'Mis viajes', url: 'misviajes', icon: 'calendar' },
    { title: 'Mis amigos', url: 'misamigos', icon: 'people' },
    { title: 'Destinos populares', url: 'destinospopulares', icon: 'compass' },
    { title: 'Actividades favoritas', url: 'actividadesfavoritas', icon: 'balloon' },
    { title: 'Alojamientos con ofertas', url: 'alojamientosconofertas', icon: 'business' },
    { title: 'Restaurantes economicos', url: 'restauranteseconomicos', icon: 'restaurant' },
    { title: 'Vuelos en oferta', url: 'vuelosenoferta', icon: 'airplane' },
    { title: 'Ayuda', url: 'ayuda', icon: 'help-buoy' },  
  ];
  public labels = [ /*'Family', 'Friends', 'Notes'*/ ];
  constructor(
    private authService: AuthService) {}
  // Method to create an array with the length of valoracion
  getStars(valoracion: number): any[] {
    return new Array(valoracion);
  } 
  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout() {
    this.authService.logout();
  }
}
