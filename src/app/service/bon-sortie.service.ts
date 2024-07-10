import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BonSortie } from 'app/Models/bon-sortie';


@Injectable({
  providedIn: 'root'
})
export class BonSortieService {

  private apiUrl = 'https://localhost:7129/api/BonSortie';

  constructor(private http: HttpClient) { }

  
  getBonsSortie(): Observable<BonSortie[]> {
    return this.http.get<BonSortie[]>(this.apiUrl);
  }
   
   addBonSortie(bonSortie: BonSortie): Observable<BonSortie> {
    return this.http.post<BonSortie>(this.apiUrl, bonSortie);
  }

 
  deleteBonSortie(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

 
  updateBonSortie(bonSortie: BonSortie): Observable<BonSortie> {
    const url = `${this.apiUrl}/${bonSortie.id}`;
    return this.http.put<BonSortie>(url, bonSortie);
  }

 // Méthode pour récupérer les produits par fournisseur depuis l'API
 getProductsBySupplier(idfour: number): Observable<any> {
  const url = `${this.apiUrl}/GetAllByFournuisseur/${idfour}`;
  return this.http.get<any>(url);
}

getChambreByFournisseurAndProduit(idFournisseur: number, idProduit: number): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/GetChambreByFournisseurAndProduit/${idFournisseur}/${idProduit}`);
}



}
