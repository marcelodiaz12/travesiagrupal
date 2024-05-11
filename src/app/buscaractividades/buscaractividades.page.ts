import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscaractividades',
  templateUrl: './buscaractividades.page.html',
  styleUrls: ['./buscaractividades.page.scss'],
})
export class BuscaractividadesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isDetailActive: boolean = false;
  isRadioButtonSelected: boolean = false;
  toggleDetail(event: any) {
    this.isDetailActive = !this.isDetailActive;
    const button = event.target;
    const detailRow = event.target.closest('tr').nextElementSibling;
    if (detailRow && detailRow.classList.contains('detail')) {
      detailRow.classList.toggle('active');
    }
    button.querySelector('ion-icon').setAttribute('ios', this.isDetailActive ? 'eye-off' : 'eye');

  }
}
