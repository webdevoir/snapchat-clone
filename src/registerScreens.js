import { Navigation } from 'react-native-navigation'

import LoginScreen from './screens/LoginScreen'
import CameraScreen from './screens/CameraScreen'
import SnapsScreen from './screens/SnapsScreen'
import SendScreen from './screens/SendScreen'
import NewSnap from './screens/NewSnap'
import ViewSnap from './screens/ViewSnap'

export default function registerScreens(store, Provider) {
  Navigation.registerComponent(
    'SnapchatClone.LoginScreen',
    () => LoginScreen,
    store,
    Provider
  )
  Navigation.registerComponent(
    'SnapchatClone.CameraScreen',
    () => CameraScreen,
    store,
    Provider
  )
  Navigation.registerComponent(
    'SnapchatClone.SnapsScreen',
    () => SnapsScreen,
    store,
    Provider
  )
  Navigation.registerComponent(
    'SnapchatClone.SendScreen',
    () => SendScreen,
    store,
    Provider
  )
  Navigation.registerComponent(
    'SnapchatClone.NewSnap',
    () => NewSnap,
    store,
    Provider
  )
  Navigation.registerComponent(
    'SnapchatClone.ViewSnap',
    () => ViewSnap,
    store,
    Provider
  )
}
