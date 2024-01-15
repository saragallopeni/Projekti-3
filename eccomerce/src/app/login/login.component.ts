import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {} 

  qasja() {
    this.http.post<any>('http://localhost:3000/login', { email: this.email, password: this.password })
      .subscribe(
        (response: any) => {
          const destinacion = response.destinacion;
          this.router.navigate([destinacion]);
        },
        (error: any) => {
          console.error('Error:', error.error);
       
        }
      );
  }
}

