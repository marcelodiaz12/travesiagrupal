import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentUser: any;
  public appPages = [
    { title: 'Mi perfil', url: '', icon: 'person-circle' },
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
    private authService: AuthService, 
    private router: Router) {}
  // Method to create an array with the length of valoracion
  getStars(valoracion: number): any[] {
    return new Array(valoracion);
  } 
  ngOnInit() { 
    
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser) {
      // Redirect to login if no user is logged in
      this.router.navigate(['/login']);
    }
     
  
  } 
}
