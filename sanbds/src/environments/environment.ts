// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:8000/api",
  currentUserToken: "token",
  currentUserProfile: "userProfile",
  firebase : {
    apiKey: "AIzaSyASgWOPwjTX9LWFhrI2QH1r3gSHryrBKJY",
    authDomain: "base-chat-6b783.firebaseapp.com",
    databaseURL: "https://base-chat-6b783.firebaseio.com",
    projectId: "base-chat-6b783",
    storageBucket: "base-chat-6b783.appspot.com",
    messagingSenderId: "931809454710"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
