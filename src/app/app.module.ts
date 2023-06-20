import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomePartComponent } from './welcome-part/welcome-part.component';
import { LetsWorkComponent } from './lets-work/lets-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomePartComponent,
    LetsWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
