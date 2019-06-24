# Becode - React Native (CRNA) / Redux: Video Library -  WIP

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)

*June 2019*

> 🔨 Tutorial 'Développez une application mobile React Native' from [Openclassrooms](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native?status=published). The goal of this tutorial is to develop a video library mobile application.


* * *

## Content of tutorial

[x] Create-React-Native-App (Expo CLI Quickstart with Node.js) / React Native Init (React Native CLI Quickstart)

[x] Components React Native

[x] Properties (props) & States

[x] API & Token / Fetch

[x] Asynchrone and Callback functions

[x] Component Lifecycle

[x] Redux architecture (Actions / Reducers / Store / Views) and states management

[x] Context of a component (Data Binding / `_this` / arrow functions)

[x] Specific development (IOS vs Android): API Share

[x] Animations with Animated library / Easing API / PanResponder API

[x] React Native application with native code (ejection) / Permissions

## Features

Video Library mobile application displaying movies and their descriptions using API TMDB.

You can display a page with a selected movie and its datas and add it to your favourites.

You can see your favourite movie list using navigation bar.

You can also share your favourite movie with your friend using a specific share button according the OS.

## How to launch
(Android only, read the [doc](https://facebook.github.io/react-native/docs/getting-started.html) for IOS/Mac )

First you will need [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr) on your Android device

**With Expo / Node.js server (application-crna branch)**:

- `npm install -g expo-cli` (should not be nessessary if you clone this repo)

- `npm start`

- Open the url provided by the server then scan the QR code with the Expo app on your Android device

**With React Native (application-ejection)**:

Follow these instructions: [Install Android development environment](https://facebook.github.io/react-native/docs/getting-started.html#1-install-android-studio)

- `react-native run-android` (if you meet problems during building try this: `npm install react-native-gesture-handler@1.0.5`)

If there are too many problem during building restart from scratch:

- `react-native init MyVideoLibrary`
- Copy these files/folders from this repo: App.js / Animations / API / Components / Helpers / Images / Navigation / Store
- Run:

~~~
npm install --save react-navigation
npm install --save react-native-gesture-handler
npm install --save moment
npm install --save numeral
npm install --save redux
npm install --save react-redux
npm install
react-native link
~~~

- `react-native run-android`

## Libraries used:

Moment

`npm install --save moment`

Numeral

`npm install --save numeral`

Navigation

`npm install --save react-navigation`

Gesture Handler

`npm install --save react-native-gesture-handler`

Image Picker

~~~~
npm install --save react-native-image-picker

react-native link
~~~~

Redux

~~~~
npm install --save redux

npm install --save react-redux

~~~~

Redux is used to manage general states (here for favourites)

- L'utilisateur clique sur le bouton "Favoris" dans le component FilmDetail.

- On crée une action avec le type "TOGGLE_FAVORITE"  et en valeur, le film affiché.

- On fait passer l'action au store Redux.

- Le store Redux donne l'action (dispatch) à un reducer capable de gérer l'action de type "TOGGLE_FAVORITE".

- Le reducer  toggleFavorite  va recevoir l'action et va modifier le state de votre application.

- Redux va détecter un changement dans son store, sur la liste des films favoris, et va envoyer la nouvelle liste de films favoris aux components abonnés à ses changements.

- Le component FilmDetail reçoit la liste des nouveaux films, la mappe à ses props et lance le cycle de vie updating pour se re-rendre.

### API: request your token

Connect and suscribe to [API TMDB (The Movie DataBase)](https://www.themoviedb.org/) and ask for a token/api key (v3 auth).

Rename **API/TMDBApi.exemple.js** in **API/TMDBApi.js** and replace `<YOUR_TOKEN_HERE>` by the token provided by API TMDB.


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

[Native Directory](https://www.native.directory/)
