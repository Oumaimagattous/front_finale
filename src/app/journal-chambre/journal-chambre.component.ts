import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fournisseur } from 'app/Models/fournisseur';
import { AuthServiceService } from 'app/service/auth-service.service';
import { ChambresService } from 'app/service/chambres.service';
import { FournissursService } from 'app/service/fournissurs.service';

@Component({
  selector: 'app-journal-chambre',
  templateUrl: './journal-chambre.component.html',
  styleUrls: ['./journal-chambre.component.scss']
})
export class JournalChambreComponent implements OnInit {

 
  chambresDetails: any[] = [];
  chambres: any[] = [];
  fournisseurs: any[] = [];
  selectedChambreId: number | null = null;
  idSociete: number | undefined;

  constructor(
    private dataService: ChambresService,
    private authService: AuthServiceService,
    private fournisseursService: FournissursService
  ) {}

  ngOnInit(): void {
    this.loadChambresDetails();
    this.loadChambres();
  }

  loadChambresDetails() {
    this.idSociete = this.authService.getIdSociete(); // Récupérer l'ID de la société connectée
    console.log('ID de la société:', this.idSociete);

    if (this.idSociete) {
      this.dataService.getChambresDetails(this.idSociete).subscribe(
        (data) => {
          this.chambresDetails = data;
        },
        (error) => {
          console.error('Une erreur est survenue : ', error);
        }
      );
    } else {
      console.error('ID de société non défini.');
    }
  
  }
  loadChambres() {
    this.idSociete = this.authService.getIdSociete();
    if (this.idSociete) {
      this.dataService.getChambresBySocieteId(this.idSociete).subscribe(
        (data) => {
          this.chambres = data;
        },
        (error) => {
          console.error('Une erreur est survenue : ', error);
        }
      );
    }
  }


  

  filter() {
    if (this.selectedChambreId) {
      this.dataService.getChambresDetailsByChambre(this.selectedChambreId).subscribe(
        (data) => {
          // Vider le tableau des détails actuels avant d'assigner les nouveaux
          this.chambresDetails.splice(0, this.chambresDetails.length);
          // Assigner les données filtrées
          this.chambresDetails = data;
        },
        (error) => {
          console.error('Une erreur est survenue : ', error);
        }
      );
    }
  }

  clearFilters(): void {
    this.selectedChambreId = null;
    this.loadChambresDetails();
  }
}
