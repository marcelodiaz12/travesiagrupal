import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'assets/db/usuarios.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.getUsers().subscribe(users => {
        const user = users.find((u: any) => u.email === email && u.password === password);
        if (user) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          observer.next(user);
        } else {
          observer.error('Credenciales invalidas');
        }
      });
    });
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('currentUser')!);
  }
}
