import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default class NewSnap extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  goSend = () => {
    this.props.navigator.push({
      screen: 'SnapchatClone.SendScreen',
      title: 'Send'
    })
  }

  cancelSnap = () => {
    this.props.navigator.pop()
  }

  render() {
    const { snapCaptured } = this.props

    return (
      <View style={styles.container}>
        <Image
          style={styles.snapImage}
          resizeMode="cover"
          source={{
            uri: snapCaptured
          }}
        />
        <TouchableOpacity style={styles.cancel} onPress={this.cancelSnap}>
          <Icon name="x" type="feather" color="white" size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.send} onPress={this.goSend}>
          <Icon name="send" type="feather" color="white" size={30} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cancel: {
    marginTop: 40,
    marginLeft: 20
  },
  send: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  snapImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
})
