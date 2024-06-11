import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }, 
  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'conversacion',
    loadChildren: () => import('./conversacion/conversacion.module').then( m => m.ConversacionPageModule)
  }, 
  {
    path: 'misviajes',
    loadChildren: () => import('./misviajes/misviajes.module').then( m => m.MisviajesPageModule)
  },
  {
    path: 'misamigos',
    loadChildren: () => import('./misamigos/misamigos.module').then( m => m.MisamigosPageModule)
  },
  {
    path: 'destinospopulares',
    loadChildren: () => import('./destinospopulares/destinospopulares.module').then( m => m.DestinospopularesPageModule)
  },
  {
    path: 'actividadesfavoritas',
    loadChildren: () => import('./actividadesfavoritas/actividadesfavoritas.module').then( m => m.ActividadesfavoritasPageModule)
  },
  {
    path: 'alojamientosconofertas',
    loadChildren: () => import('./alojamientosconofertas/alojamientosconofertas.module').then( m => m.AlojamientosconofertasPageModule)
  },
  {
    path: 'restauranteseconomicos',
    loadChildren: () => import('./restauranteseconomicos/restauranteseconomicos.module').then( m => m.RestauranteseconomicosPageModule)
  },
  {
    path: 'vuelosenoferta',
    loadChildren: () => import('./vuelosenoferta/vuelosenoferta.module').then( m => m.VuelosenofertaPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'votacion',
    loadChildren: () => import('./votacion/votacion.module').then( m => m.VotacionPageModule)
  },
  {
    path: 'nuevoviaje',
    loadChildren: () => import('./nuevo-viaje/nuevo-viaje.module').then( m => m.NuevoViajePageModule)
  },
  {
    path: 'nuevoviaje/amigos',
    loadChildren: () => import('./nuevo-viaje/amigos/amigos.module').then( m => m.AmigosPageModule)
  } ,
  {
    path: 'nuevoviaje/destino',
    loadChildren: () => import('./nuevo-viaje/destino/destino.module').then( m => m.DestinoPageModule)
  } ,
  {
    path: 'nuevoviaje/vuelo',
    loadChildren: () => import('./nuevo-viaje/vuelo/vuelo.module').then( m => m.VueloPageModule)
  } ,
  {
    path: 'nuevoviaje/alojamiento',
    loadChildren: () => import('./nuevo-viaje/alojamiento/alojamiento.module').then( m => m.AlojamientoPageModule)
  } ,
  {
    path: 'nuevoviaje/restaurantes',
    loadChildren: () => import('./nuevo-viaje/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  } ,
  {
    path: 'nuevoviaje/actividades',
    loadChildren: () => import('./nuevo-viaje/actividades/actividades.module').then( m => m.ActividadesPageModule)
  }  ,
  {
    path: 'nuevoviaje/resumen',
    loadChildren: () => import('./nuevo-viaje/resumen/resumen.module').then( m => m.ResumenPageModule)
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
