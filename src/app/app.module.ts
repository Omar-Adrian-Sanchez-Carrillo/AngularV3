import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './acerca/acerca.component';
import { Parallax1Component } from './parallax1/parallax1.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { Parallax2Component } from './parallax2/parallax2.component';
import { BeneficioComponent } from './beneficio/beneficio.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { HomeComponent } from './page/home/home.component';
import { LogComponent } from './log/log.component';
import { RegComponent } from './reg/reg.component';
import { PacienteComponent } from './page/paciente/paciente.component';
import { InfpacienteComponent } from './infpaciente/infpaciente.component';
import { ListaconsultaComponent } from './listaconsulta/listaconsulta.component';
import { ConsultasComponent } from './page/consultas/consultas.component';
import { Consulta1Component } from './consulta1/consulta1.component';
import { VerComponent } from './page/ver/ver.component';
import { EmergenciasComponent } from './page/emergencias/emergencias.component';
import { EmergeComponent } from './emerge/emerge.component';
import { QrComponent } from './qr/qr.component';
import { CodigoQrComponent } from './page/codigo-qr/codigo-qr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavangularComponent } from './navangular/navangular.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderNav2Component } from './header-nav2/header-nav2.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    Parallax1Component,
    ObjetivoComponent,
    Parallax2Component,
    BeneficioComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    LogComponent,
    RegComponent,
    PacienteComponent,
    InfpacienteComponent,
    ListaconsultaComponent,
    ConsultasComponent,
    Consulta1Component,
    VerComponent,
    EmergenciasComponent,
    EmergeComponent,
    QrComponent,
    CodigoQrComponent,
    NavangularComponent,
    HeaderNavComponent,
    HeaderNav2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
