# Becode - React Native / Redux - Video Library -  WIP

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)

*June 2019*

> 🔨 Tutorial 'Développez une application mobile React Native' from [Openclassrooms](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native?status=published). The goal of this tutorial is to develop a video library mobile application.


* * *

[x] React Native Init vs Create React Native App

[x] Components React Native

[x] JSX / Styles / Flexbox

[x] Props & States

[x] API & Token / Fetch

[x] Asynchrone vs Callback

[x] Component Lifecycle

[x] Redux

[x] Context of a component : This + Data Binding == Arrow functions

## Features

**WIP**

Video Library mobile application displaying movies and their descriptions using API TMDB.

### API: request your token

Connect and suscribe to [API TMDB (The Movie DataBase)](https://www.themoviedb.org/) and ask for a token/api key (v3 auth).

Rename **API/TMDBApi.exemple.js** in **API/TMDBApi.js** and replace `<YOUR_TOKEN_HERE>` by the token provided by API TMDB.

## Libraries used:

`npm install --save moment`

`npm install --save numeral`

## Redux

~~~~
npm install --save redux

npm install --save react-redux

npm install
~~~~

- L'utilisateur clique sur le bouton "Favoris" dans le component FilmDetail.

- On crée une action avec le type "TOGGLE_FAVORITE"  et en valeur, le film affiché.

- On fait passer l'action au store Redux.

- Le store Redux donne l'action (dispatch) à un reducer capable de gérer l'action de type "TOGGLE_FAVORITE".

- Le reducer  toggleFavorite  va recevoir l'action et va modifier le state de votre application.

- Redux va détecter un changement dans son store, sur la liste des films favoris, et va envoyer la nouvelle liste de films favoris aux components abonnés à ses changements.

- Le component FilmDetail reçoit la liste des nouveaux films, la mappe à ses props et lance le cycle de vie updating pour se re-rendre.


## Useful links

### Android Studio / Android

[Install Android Studio](https://developer.android.com/studio/install)

[Installing Java 8 and Android Studio on Ubuntu 18.04](https://www.techiediaries.com/java-android-studio-ubuntu/)

[Android Studio: Run apps on a hardware device](https://developer.android.com/studio/run/device.html#developer-device-options)

[Android Studio: /dev/kvm device permission denied](https://stackoverflow.com/questions/37300811/android-studio-dev-kvm-device-permission-denied)

[How to unlock and enable Developer options on any Android phone](https://www.greenbot.com/article/2457986/how-to-enable-developer-options-on-your-android-phone-or-tablet.html)

[How to Enable USB Debugging Mode on Android](https://www.kingoapp.com/root-tutorials/how-to-enable-usb-debugging-mode-on-android.htm)

[Inotify Watches Limit](https://confluence.jetbrains.com/display/IDEADEV/Inotify+Watches+Limit)

### React Native

[Running On Device](https://facebook.github.io/react-native/docs/running-on-device)

[Expo: The fastest way to build an app](https://expo.io/)

[Expo: Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

[React Native Git Upgrade](https://www.npmjs.com/package/react-native-git-upgrade/v/0.3.0-beta.1)

[React Native Init VS Expo](https://blog.nano3labs.com/react-native-init-vs-expo-in-sept-2018-6d2f2db65f9e)

### React Native - Development

[Openclassrooms: Développez une application mobile React Native](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native?status=published)

[API TMDB (The Movie DataBase)](https://www.themoviedb.org/documentation/api?language=fr)

[Components and APIs](https://facebook.github.io/react-native/docs/components-and-apis.html#basic-components)

[React Native Styling Cheat Sheet](https://github.com/vhpoet/react-native-styling-cheat-sheet)
