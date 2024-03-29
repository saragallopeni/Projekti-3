import { Component, OnInit } from '@angular/core';
import { ProduktiService } from '../service/produkti.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{
  emri: string = '';
  cmimi: number = 0;
  sasia: number = 0;
  kategoriaSelektuar: string = '';
  pershkrimi: string = '';
  selectedFile: File | null = null;



  
    constructor(private produktiService: ProduktiService) {}

  
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
    }
  
    shtoProduktin() {
      const formData = new FormData();
      formData.append('emri', this.emri);
      formData.append('cmimi', this.cmimi.toString());
      formData.append('sasia', this.sasia.toString());
      formData.append('pershkrimi', this.pershkrimi);
      formData.append('kategoria', this.kategoriaSelektuar);
      if (this.selectedFile) {
        formData.append('photo', this.selectedFile, this.selectedFile.name);
      }
  
      this.produktiService.shtoProduktin(formData).subscribe(
        (response) => {
          console.log('Pergjigjja:', response);
          const fotoUrl = response.foto_url;
          console.log('Foto URL:', fotoUrl);
          alert('Produkti u shtua me sukses!');
        } );  
    }


    produktiId: number = 0;

    fshiProduktin() {
      if (!this.produktiId) {
        alert('Të lutem vendos id e produktit për të fshirë');
        return;
      }
  
      this.produktiService.fshiProduktin(this.produktiId).subscribe(
        (response) => {
          console.log(response);
          alert('Produkti u fshi me sukses!');

        }
      );
    }
    
    // kategoriaSelektuar: string = '';
    kategorit: any[] = [];

    ngOnInit() {
      this.listaKategorise();
    }
  
    listaKategorise() {
      this.produktiService.merrKategorite().subscribe(
        (data) => {
          console.log('Kategorit:', data);
          this.kategorit = data;
        }
      );
    }
  
    selektoKategorine(kategoria: string) {
      this.kategoriaSelektuar = kategoria;
    }
    

    id: any = 0;
  

    update() {
      if (!this.id) {
        alert('Ju lutem shënoni id e produktit.');
        return;
      }

      if (!this.kategoriaSelektuar) {
        alert('Ju lutem shënoni kategorin.');
        return;
      }
    
      const ndrysho = {
        id: this.id,
        emri: this.emri,
        cmimi: this.cmimi,
        sasia: this.sasia,
        pershkrimi: this.pershkrimi,
        kategoria: this.kategoriaSelektuar
      };
    
      this.produktiService.ndryshoProduktin(this.id, ndrysho).subscribe(
        (response) => {
          console.log(response);
          alert('Produkti u ndryshua me sukses!');
        }
      );
    }


  }

