import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KlientComponent } from './klient/klient.component';
import { AdminComponent } from './admin/admin.component';
import { RrethNeshComponent } from './rreth-nesh/rreth-nesh.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SherbimiComponent } from './sherbimi/sherbimi.component';
import { ZbritjeComponent } from './zbritje/zbritje.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QasjaComponent } from './qasja/qasja.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { ListaproduktitComponent } from './listaproduktit/listaproduktit.component';
import { EcomerceKlientiComponent } from './ecomerce-klienti/ecomerce-klienti.component';
import { ZbritjetKlientiComponent } from './zbritjet-klienti/zbritjet-klienti.component';
import { NavKlientiComponent } from './nav-klienti/nav-klienti.component';
import { FooterKlientiComponent } from './footer-klienti/footer-klienti.component';
import { SherbimiKlientiComponent } from './sherbimi-klienti/sherbimi-klienti.component';
import { RrethNeshKlientiComponent } from './rreth-nesh-klienti/rreth-nesh-klienti.component';


@NgModule({
  declarations: [
    AppComponent,
    KlientComponent,
    AdminComponent,
    RrethNeshComponent,
    NavbarComponent,
    EcommerceComponent,
    SherbimiComponent,
    ZbritjeComponent,
    LoginComponent,
    RegisterComponent,
    QasjaComponent,
    FooterComponent,
    GiftcardsComponent,
    ListaproduktitComponent,
    EcomerceKlientiComponent,
    ZbritjetKlientiComponent,
    NavKlientiComponent,
    FooterKlientiComponent,
    SherbimiKlientiComponent,
    RrethNeshKlientiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
