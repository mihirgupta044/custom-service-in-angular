import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VotePageComponent } from './components/vote-page/vote-page.component';
import { CheckboxModule,InputsModule } from 'angular-bootstrap-md';
import { NavbarModule,WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { ResultPageComponent } from './components/result-page/result-page.component';
import { voteCount } from './Services/countService';
import { MatTableModule } from '@angular/material/table';
//import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VotePageComponent,
    ResultPageComponent,
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, 
    MDBBootstrapModule.forRoot(),
    CheckboxModule,InputsModule,
    NavbarModule,WavesModule, ButtonsModule,
    FormsModule,
  ],
  providers: [voteCount],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
