import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BestSellerComponent} from './best-seller/best-seller.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {SharedComponent} from './shared/shared.component';
import {FullComponent} from './layouts/full/full.component';
import {HeaderComponent} from './layouts/full/header/header.component';
import {SidebarComponent} from './layouts/full/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    BestSellerComponent,
    DashboardComponent,
    HomeComponent,
    SharedComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
