import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect, Provider } from 'react-redux'
import registerScreens from './registerScreens'
import configureStore from './store/configureStore'
import { changeAuth } from './actions/auth'
import { iconsMap, iconsLoaded } from './utils/icons-loader'

const store = configureStore()

registerScreens(store, Provider)

console.disableYellowBox = true

class App {
  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this))
    const { isLoggedIn } = store.getState().auth

    iconsLoaded.then(() => {
      store.dispatch(changeAuth(isLoggedIn))
    })
  }

  onStoreUpdate() {
    const { isLoggedIn } = store.getState().auth
    // handle an auth change
    if (this.isLoggedIn != isLoggedIn) {
      this.isLoggedIn = isLoggedIn
      this.startApp(isLoggedIn)
    }
  }

  startApp(isLoggedIn) {
    if (!isLoggedIn) {
      StatusBar.setBarStyle('dark-content')
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'SnapchatClone.LoginScreen',
          navigatorStyle: {
            navBarHidden: true
          }
        }
      })
    } else {
      StatusBar.setBarStyle('light-content')
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: '',
            screen: 'SnapchatClone.SnapsScreen',
            title: 'Snaps',
            icon: iconsMap['message-square'],
            navigatorStyle: {
              navBarBackgroundColor: '#29B6F6',
              navBarTextColor: 'white',
              navBarButtonColor: 'white'
            },
            navigatorButtons: {
              rightButtons: [
                {
                  icon: iconsMap['log-out'],
                  id: 'logout'
                }
              ]
            }
          },
          {
            label: '',
            screen: 'SnapchatClone.CameraScreen',
            title: 'Camera',
            icon: iconsMap['camera'],
            navigatorStyle: {
              navBarHidden: true,
              tabBarHidden: true
            }
          }
        ],
        tabsStyle: {
          tabBarBackgroundColor: 'white',
          tabBarButtonColor: '#bbb',
          tabBarSelectedButtonColor: '#222'
          //initialTabIndex: 1
        },
        appStyle: {
          tabBarBackgroundColor: 'white',
          tabBarButtonColor: '#bbb',
          tabBarSelectedButtonColor: '#222'
          //initialTabIndex: 1
        }
      })
    }
  }
}

export default App
