import { Component, OnInit } from '@angular/core';
import { ProduktiService } from '../service/produkti.service';

@Component({
  selector: 'app-listaproduktit',
  templateUrl: './listaproduktit.component.html',
  styleUrl: './listaproduktit.component.scss'
})
export class ListaproduktitComponent implements OnInit {
      

  constructor(private produktiService: ProduktiService) {}


      //lista
      listaProdukti: any[] = [];

      ngOnInit() {
        this.lista();
      }

      lista() {
        this.produktiService.listaProduktit().subscribe(
          (data: any[]) => {
            this.listaProdukti = data;
          }
        );
      }

}
