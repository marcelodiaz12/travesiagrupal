import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { UtilsService } from '../utils.service'; // Adjust the path as needed
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit { 

  currentUser: any;
  public items: any[] = []; // Define la propiedad usuarios 

  constructor(
    private dataService: DataService,
    public utils: UtilsService, 
    private http: HttpClient,
    private authService: AuthService, 
    private router: Router
  ) {}
  
  ngOnInit() {
    this.dataService.getUsuarios().subscribe(data => {
      this.items = data; // Assign the data to the items property
    });
    
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser) {
      // Redirect to login if no user is logged in
      this.router.navigate(['/login']);
    }
     
  
  }   
}
 