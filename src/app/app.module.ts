import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './container/main-layout/main-layout.component';
import { HeaderComponent } from './pages/header/header.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge';
import { SidemenuComponent } from './container/sidemenu/sidemenu.component'
import { MatCardModule } from '@angular/material/card'
import { CardComponent } from './container/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MatInputModule } from '@angular/material/input'
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';
import { CartDialogComponent } from './pages/cart-dialog/cart-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MakeOrderComponent } from './pages/cart-dialog/make-order/make-order.component';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    PizzaComponent,
    SidemenuComponent,
    CardComponent,
    ContactComponent,
    CartDialogComponent,
    MakeOrderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatSidenavModule]
})
export class AppModule { }
