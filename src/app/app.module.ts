import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from '@angular/material';
import {MatToolbarModule,
  MatCardModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { DisplayblogComponent } from './displayblog/displayblog.component';

import{ApiserviceService }from "./service/apiservice.service";
import  {HttpClientModule} from "@angular/common/http";
import { FormcreateComponent } from './formcreate/formcreate.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayblogComponent,
    FormcreateComponent,
    SideNavComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
