import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planearviaje',
  templateUrl: './planearviaje.page.html',
  styleUrls: ['./planearviaje.page.scss'],
})
export class PlanearviajePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

  toggleIconName(event: any) {
    const icon = event.target;
    icon.name = icon.name === 'add' ? 'close' : 'add';
  }
}
