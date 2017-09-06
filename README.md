### [React Native Web](https://github.com/necolas/react-native-web)  Project Generator

This app works on React Native (iOS, Android, AppleTV) and web.

## To get started, install the create-rn-web-app cli globally   
```
npm i -g create-rn-web-app
```

## To create a new React Native Web app

1. Run create-rn-web-app <projectName>   
```
create-rn-web-app MyProject
```


![cli](https://i.imgur.com/2Mni88m.jpg)


### To run on web:   

1. Run npm run web
```
npm run web
```

This starts the webpack server.

2. Open localhost:8080 in your browser to view the app.

### Building for React Native (iOS, Android, AppleTV)   

iOS: Run react-native run-ios
```
react-native run-ios 
``` 

This start the packager as well as the iOS simulator.

Android: Run react-native run-android
```
react-native run-android
```

This start the packager as well as the Android emulator.

Use the command line, Xcode or Android Studio to build and deploy the native app code just like you would with any other React Native project.
