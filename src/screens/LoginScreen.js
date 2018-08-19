import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import {
  Container,
  Icon,
  Button,
  Label,
  Text,
  Form,
  Item,
  Input
} from 'native-base'
import { View, StyleSheet, Image } from 'react-native'

class LoginScreen extends Component {
  handleLogin() {
    this.props.dispatch(login())
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form style={styles.form}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../../img/snapchat_ghost.png')}
          />
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ marginBottom: 30 }}>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button
            full
            dark
            rounded
            style={styles.button}
            onPress={this.handleLogin.bind(this)}>
            <Text style={{ fontSize: 18 }}>Log In</Text>
          </Button>
        </Form>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFC00',
    color: 'white'
  },
  logo: { width: 70, height: 70 },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  button: {
    marginBottom: 30,
    marginHorizontal: 50,
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
})

export default connect()(LoginScreen)
