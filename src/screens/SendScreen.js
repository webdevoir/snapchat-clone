import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from 'native-base'
import { connect } from 'react-redux'
import { addSnap } from '../actions/currentUser'

class SendScreen extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: '#AB47BC',
    navBarTextColor: 'white',
    navBarButtonColor: 'white'
  }

  sendSnap() {
    // add to current user's snaps for now
    const { currentUser, snapCaptured } = this.props
    const now = new Date()

    const snap = {
      id: now.getTime(),
      author: currentUser.name,
      source:
        'https://images.unsplash.com/photo-1534535674105-40d57109f1f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ab40c690ba2d39c97d6a718dd2062b5&auto=format&fit=crop&w=668&q=80',
      timestamp: 'Just now'
    }

    this.props.dispatch(addSnap(snap)).then(() => {
      this.props.navigator.popToRoot()
    })
  }

  render() {
    const { currentUser } = this.props
    const profileImgOne = require('../../img/one.png')
    const profileImgTwo = require('../../img/two.png')
    return (
      <Container>
        <Content>
          <List>
            <ListItem
              avatar
              style={{
                paddingVertical: 10,
                borderBottomColor: 'rgba(0,0,0,0.05)',
                borderBottomWidth: 1
              }}
              onPress={this.sendSnap.bind(this)}>
              <Left>
                <Thumbnail
                  source={profileImgOne}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20
                  }}
                />
              </Left>
              <Body style={{ paddingVertical: 20, borderBottomColor: 'white' }}>
                <Text>{currentUser.name}</Text>
              </Body>
            </ListItem>
            {currentUser.friends.map(friend => (
              <ListItem
                avatar
                key={friend.id}
                style={{
                  paddingVertical: 10,
                  borderBottomColor: 'rgba(0,0,0,0.05)',
                  borderBottomWidth: 1
                }}>
                <Left>
                  <Thumbnail
                    source={profileImgTwo}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20
                    }}
                  />
                </Left>
                <Body
                  style={{ paddingVertical: 20, borderBottomColor: 'white' }}>
                  <Text>{friend.name}</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
})

export default connect(mapStateToProps)(SendScreen)
