import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getDatabase } from 'firebase/database';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      "projectId": "horariosbusstacecilia",
      "appId": "1:328057200146:web:1b843c91ffbc089682c2cb",
      "databaseURL": "https://horariosbusstacecilia-default-rtdb.firebaseio.com",
      "storageBucket": "horariosbusstacecilia.firebasestorage.app",
      "apiKey": "AIzaSyAUUpIP3tBA-7mTafBpl88WJ43faUtehPU",
      "authDomain": "horariosbusstacecilia.firebaseapp.com",
      "messagingSenderId": "328057200146"
    })),
    provideFirestore(() => getFirestore())
  ]
};
