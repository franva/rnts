This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).


## How to run it

* npm i
* npm start

### For running on simulator
```
npm run android
# or
npm run ios
```
### For running on real devices
```
react-native run-android
# or
react-native run-ios
```
(make sure you have connected your devices and opened Allow USB Debug)

### Troubleshooting

If the react-native run-android/ios stops after scanning the node_modules folder, then run the following commands:

Scanning folders for symlinks in F:\temp\Playground\rnts\node_modules (59ms)
You should consider using the new upgrade tool based on Git. It makes upgrades easier by resolving most conflicts automatically.
To use it:
- Go back to the old version of React Native
- Run "npm install -g react-native-git-upgrade"
- Run "react-native-git-upgrade"
See https://facebook.github.io/react-native/docs/upgrading.html