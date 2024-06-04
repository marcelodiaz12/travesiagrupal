import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log('Login successful', user);
        this.router.navigate(['/folder']); // Navigate to the home page or any other page after login
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Credenciales invalidas');
      }
    });
  }
}
