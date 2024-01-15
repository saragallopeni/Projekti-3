import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduktiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  shtoProduktin(productData: any): Observable<any> {
    const url = `${this.apiUrl}/shtoproduktin`;
    return this.http.post<any>(url, productData);
}

listaProduktit(): Observable<any[]> {
    const url = `${this.apiUrl}/lista`;
    return this.http.get<any[]>(url);
}

fshiProduktin(produktiId: number): Observable<any> {
  const url = `${this.apiUrl}/delete/${produktiId}`;
  return this.http.delete<any>(url);
}

merrKategorite(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/kategorit`);
}

ndryshoProduktin(id: number, data: any): Observable<any> {
  const url = `${this.apiUrl}/update/${id}`;
  return this.http.put<any>(url, data);
}



}
