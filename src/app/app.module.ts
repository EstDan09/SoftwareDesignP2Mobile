import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { ComponentsModule } from './components/components.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { Capacitor } from '@capacitor/core';

const firebaseConfig = {
  apiKey: "AIzaSyBZBjEAoo_Ec02kcA3eDoAo1WTQGPQKxwE",
  authDomain: "proyecto1dds.firebaseapp.com",
  projectId: "proyecto1dds",
  storageBucket: "proyecto1dds.firebasestorage.app",
  messagingSenderId: "13602040556",
  appId: "1:13602040556:web:6896610ca85ec2af8f53c9",
  measurementId: "G-9ETF70JSRP"
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json")
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-ge18shrpotjsh68b.us.auth0.com',
      clientId: 'fQLoXnPLiquM1ztmal3uRNEE71FuqLdP',
      authorizationParams: {
        redirect_uri: Capacitor.isNativePlatform()
          ? 'com.worldtravel.app://callback'
          : window.location.origin + '/callback',
      },
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ComponentsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
