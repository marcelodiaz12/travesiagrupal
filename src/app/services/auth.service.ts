import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'assets/db/usuarios.json'; // Path to your JSON file
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, 
    private router: Router) {
    const storedUser = sessionStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getUsers(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.getUsers().subscribe(users => {
        const user = users.find((u: any) => u.email === email && u.password === password);
        if (user) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          observer.next(user);
        } else {
          observer.error('Credenciales invalidas');
        }
      });
    });
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);    
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('currentUser')!);
  }
}
