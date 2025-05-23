import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [

      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ,
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"capstone-2025-ec7b8","appId":"1:169849532805:web:ac9709faee6022ea6854ec","storageBucket":"capstone-2025-ec7b8.firebasestorage.app","apiKey":"","authDomain":"capstone-2025-ec7b8.firebaseapp.com","messagingSenderId":"169849532805","measurementId":"G-28ZV8FGBB3"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
