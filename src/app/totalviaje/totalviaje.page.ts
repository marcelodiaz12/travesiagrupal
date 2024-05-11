import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-totalviaje',
  templateUrl: './totalviaje.page.html',
  styleUrls: ['./totalviaje.page.scss'],
})
export class TotalviajePage implements OnInit {

  constructor( ) {}


  ngOnInit() {
  } 
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
