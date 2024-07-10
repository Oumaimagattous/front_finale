import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'app/service/auth-service.service';
import { ChambresService } from 'app/service/chambres.service';

@Component({
  selector: 'app-eta-chambre',
  templateUrl: './eta-chambre.component.html',
  styleUrls: ['./eta-chambre.component.scss']
})
export class EtaChambreComponent implements OnInit {

  chambres: any[] = [];
  societeId: number;
  selectedChambreId: number | null = null;
  idSociete: number | undefined;

 

  constructor(private etatChambreService: ChambresService, private authService: AuthServiceService, private dataService: ChambresService,) { }

  ngOnInit(): void {
    this.societeId = this.authService.getIdSociete();
    console.log("Societe ID on Init:", this.societeId);
    if (this.societeId) {
      this.loadEtatStock();
      this.loadChambres();
    } else {
      console.error('Erreur: Societe ID est undefined');
    }
  }

  loadEtatStock(): void {
    this.etatChambreService.getEtatChambres(this.societeId).subscribe(
      (data) => {
        this.chambres = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'état du stock', error);
      }
    );
  }
  loadChambres(): void {
    this.idSociete = this.authService.getIdSociete();
    if (this.idSociete) {
      this.etatChambreService.getChambresBySocieteId(this.idSociete).subscribe(
        (data) => {
          this.chambres = data;
        },
        (error) => {
          console.error('Une erreur est survenue : ', error);
        }
      );
    }
  }

  filter(): void {
    
  }
  clearFilters(): void {
   
    this.selectedChambreId = null;
    this.loadEtatStock();
  }


}
