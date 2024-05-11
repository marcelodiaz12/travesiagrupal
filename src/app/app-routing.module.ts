import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'seleccionardestino',
    loadChildren: () => import('./seleccionardestino/seleccionardestino.module').then( m => m.SeleccionardestinoPageModule)
  },
  {
    path: 'planearviaje',
    loadChildren: () => import('./planearviaje/planearviaje.module').then( m => m.PlanearviajePageModule)
  },
  {
    path: 'verificardisponibilidad',
    loadChildren: () => import('./verificardisponibilidad/verificardisponibilidad.module').then( m => m.VerificardisponibilidadPageModule)
  },
  {
    path: 'buscarvuelos',
    loadChildren: () => import('./buscarvuelos/buscarvuelos.module').then( m => m.BuscarvuelosPageModule)
  },
  {
    path: 'buscaralojamiento',
    loadChildren: () => import('./buscaralojamiento/buscaralojamiento.module').then( m => m.BuscaralojamientoPageModule)
  },
  {
    path: 'buscaractividades',
    loadChildren: () => import('./buscaractividades/buscaractividades.module').then( m => m.BuscaractividadesPageModule)
  },
  {
    path: 'totalviaje',
    loadChildren: () => import('./totalviaje/totalviaje.module').then( m => m.TotalviajePageModule)
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
    path: 'resumenamigos',
    loadChildren: () => import('./resumenamigos/resumenamigos.module').then( m => m.ResumenamigosPageModule)
  },
  {
    path: 'resumenactividades',
    loadChildren: () => import('./resumenactividades/resumenactividades.module').then( m => m.ResumenactividadesPageModule)
  },
  {
    path: 'resumenalojamiento',
    loadChildren: () => import('./resumenalojamiento/resumenalojamiento.module').then( m => m.ResumenalojamientoPageModule)
  },
  {
    path: 'resumenrestaurantes',
    loadChildren: () => import('./resumenrestaurantes/resumenrestaurantes.module').then( m => m.ResumenrestaurantesPageModule)
  },
  {
    path: 'resumentransporte',
    loadChildren: () => import('./resumentransporte/resumentransporte.module').then( m => m.ResumentransportePageModule)
  },
  {
    path: 'resumenvuelos',
    loadChildren: () => import('./resumenvuelos/resumenvuelos.module').then( m => m.ResumenvuelosPageModule)
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
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'votacion',
    loadChildren: () => import('./votacion/votacion.module').then( m => m.VotacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
