import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'
import { RNCamera } from 'react-native-camera'

class CameraScreen extends Component {
  goToSnaps() {
    this.props.navigator.switchToTab({ tabIndex: 0 })
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)

      this.props.navigator.push({
        screen: 'SnapchatClone.NewSnap',
        passProps: {
          snapCaptured: data.uri
        }
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }>
          <View style={styles.bottomNav}>
            <TouchableOpacity
              style={styles.capture}
              onPress={() => this.takePicture()}>
              <Image source={require('../../img/capture_icon.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.messageButton}>
            <TouchableOpacity onPress={this.goToSnaps.bind(this)}>
              <Icon
                name="message-square"
                type="feather"
                color="white"
                size={35}
              />
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bottomNav: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  capture: {
    flex: 0,
    alignSelf: 'center',
    marginBottom: 50
  },
  messageButton: {
    flex: 0,
    position: 'absolute',
    left: 50,
    bottom: 50
  }
})

export default connect()(CameraScreen)
