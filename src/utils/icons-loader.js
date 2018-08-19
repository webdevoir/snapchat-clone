// Define all your icons once,
// load them once,
// and use everywhere

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g
const ICON_SIZE = 30

const icons = {
  'ios-person': [ICON_SIZE, '#bbb'],
  'ios-person--big': [ICON_SIZE, '#bbb'],

  'ios-person--active': [ICON_SIZE, '#fff'],
  'ios-person--active--big': [ICON_SIZE, '#fff'],
  'ios-person--active--very-big': [ICON_SIZE, '#fff'],

  'ios-people': [ICON_SIZE, '#bbb'],
  'ios-people--active': [ICON_SIZE, '#fff'],

  'ios-keypad': [ICON_SIZE, '#bbb'],
  'ios-keypad--active': [ICON_SIZE, '#fff'],

  'ios-chatbubbles': [ICON_SIZE, '#bbb'],
  'ios-chatbubbles--active': [ICON_SIZE, '#fff'],

  // Use other Icon provider, see the logic at L39
  facebook: [ICON_SIZE, '#bbb', FontAwesome],
  'facebook--active': [ICON_SIZE, '#fff', FontAwesome],

  circle: [ICON_SIZE, '#bbb', Feather],
  'message-square': [ICON_SIZE, '#bbb', Feather],
  'message-square-white': [ICON_SIZE, 'white', Feather],
  menu: [ICON_SIZE, '#bbb', Feather],
  camera: [ICON_SIZE, '#bbb', Feather],
  search: [ICON_SIZE - 2, '#bbb', Feather],
  'log-in': [ICON_SIZE - 2, '#bbb', Feather],
  'log-out': [ICON_SIZE - 2, '#bbb', Feather]
}

const defaultIconProvider = Ionicons

let iconsMap = {}
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      )
    })
  ).then(sources => {
    Object.keys(icons).forEach(
      (iconName, idx) => (iconsMap[iconName] = sources[idx])
    )

    // Call resolve (and we are done)
    resolve(true)
  })
})

export { iconsMap, iconsLoaded }
