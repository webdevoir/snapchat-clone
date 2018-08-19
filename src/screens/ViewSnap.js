import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default class ViewSnap extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  close() {
    this.props.navigator.dismissModal()
  }

  render() {
    const { snapSource } = this.props

    return (
      <View style={styles.container}>
        <Image
          style={styles.snapImage}
          resizeMode="cover"
          source={{ uri: snapSource }}
        />
        <TouchableOpacity style={styles.close} onPress={this.close.bind(this)}>
          <Icon name="arrow-left" type="feather" color="white" size={30} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  close: {
    marginTop: 40,
    marginLeft: 20
  },
  snapImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
})
