import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrethNeshComponent } from './rreth-nesh/rreth-nesh.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SherbimiComponent } from './sherbimi/sherbimi.component';
import { ZbritjeComponent } from './zbritje/zbritje.component';
import { QasjaComponent } from './qasja/qasja.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { KlientComponent } from './klient/klient.component';
import { FooterComponent } from './footer/footer.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { ListaproduktitComponent } from './listaproduktit/listaproduktit.component';
import { RrethNeshKlientiComponent } from './rreth-nesh-klienti/rreth-nesh-klienti.component';
import { ZbritjetKlientiComponent } from './zbritjet-klienti/zbritjet-klienti.component';
import { SherbimiKlientiComponent } from './sherbimi-klienti/sherbimi-klienti.component';


const routes: Routes = [
  {
    path: 'rreth-nesh', 
    component: RrethNeshComponent, 
    },
    {
      path: '',
      component: EcommerceComponent,
    },
    {
      path: 'sherbimi',
      component: SherbimiComponent,
    },
    {
      path: 'zbritje',
      component: ZbritjeComponent,
    },
    {
      path: 'qasuni',
      component: QasjaComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'admin',
      component: AdminComponent,
    },
    {
      path: 'klienti',
      component: KlientComponent,
    },
    {
      path: 'footer',
      component: FooterComponent,
    },
    {
      path: 'giftcards',
      component: GiftcardsComponent,
    },
    {
      path: 'lista',
      component: ListaproduktitComponent,
    },
    {
      path: 'rreth-nesh-klienti',
      component: RrethNeshKlientiComponent,
    },
    {
      path: 'zbritjet-klienti',
      component: ZbritjetKlientiComponent,
    },
    {
      path: 'sherbimi-klienti',
      component: SherbimiKlientiComponent,
    }

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
