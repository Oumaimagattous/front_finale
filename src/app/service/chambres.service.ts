import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambresService {
  private readonly baseUrl = 'https://localhost:7129/api/Chambre';

  constructor(private _http: HttpClient) {}

  addChambre(data: any): Observable<any> {
    return this._http.post(`${this.baseUrl}`, data);
  }

  updateChambre(id: number, data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/${id}`, data);
  }

  getChambreList(): Observable<any> {
    return this._http.get(`${this.baseUrl}`);
  }
   getChambresBySocieteId(idSociete: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/BySociete/${idSociete}`);
  }

  deleteChambre(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
  getChambre(id: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/${id}`);
  }
  getChambresDetails(societeId: number): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseUrl}/DetailsBySociete/${societeId}`);
  }
 
  getByFournisseurAndChambre(fournisseurId: number, chambreId: number, produitId: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/FilterByFournisseurAndChambre/${fournisseurId}/${chambreId}/${produitId}`);
  }

  getChambresDetailsByChambre(chambreId: number): Observable<any> {
    const url = `${this.baseUrl}/DetailsBySocieteBychambre?chambreId=${chambreId}`;
    return this._http.get<any>(url)
      
  }
  getEtatChambres(societeId: number, idChambre?: number): Observable<any> {
    let url = `${this.baseUrl}/EtatChambre/${societeId}`;
    if (idChambre) {
      url += `?idChambre=${idChambre}`;
    }
    return this._http.get<any>(url);
  }





}
