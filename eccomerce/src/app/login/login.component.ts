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

  // Use the same variable name as in the .env file
  SecretKey: string = '1a76e427806c97b29be331605c0871d8';

  constructor(private http: HttpClient, private router: Router) {}

  qasja() {
    this.http.post<any>('http://localhost:3000/login', { email: this.email, password: this.password })
      .subscribe(
        (response: any) => {
          const decodedToken = this.decodeJwtToken(response.token);

          if (decodedToken.roli === 'admin') {
            this.router.navigate(['/admin']);
          } else if (decodedToken.roli === 'klienti') {
            this.router.navigate(['/klienti']);
          }
        });
  }

  private decodeJwtToken(token: string): any {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    return decodedPayload;
  }
  
}
