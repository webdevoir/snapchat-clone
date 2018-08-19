import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'
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
import { changeAuth } from '../actions/auth'

class SnapsScreen extends Component {
  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') {
      // this is the event type for button presses
      if (event.id == 'logout') {
        this.props.dispatch(changeAuth(false))
      }
    }
  }

  handleSnapPress(snap) {
    this.props.navigator.showModal({
      screen: 'SnapchatClone.ViewSnap',
      passProps: {
        snapSource: snap.source
      }
    })
  }

  render() {
    const { currentUser } = this.props
    const profileImg = require('../../img/one.png')
    return (
      <Container>
        <Content>
          <List>
            {currentUser.snaps.map(snap => (
              <ListItem
                avatar
                key={snap.id}
                style={{
                  paddingVertical: 10,
                  borderBottomColor: 'rgba(0,0,0,0.05)',
                  borderBottomWidth: 1
                }}
                onPress={() => this.handleSnapPress(snap)}>
                <Left>
                  <Thumbnail
                    source={profileImg}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20
                    }}
                  />
                </Left>
                <Body
                  style={{ paddingVertical: 20, borderBottomColor: 'white' }}>
                  <Text>{snap.author}</Text>
                  <Text note numberOfLines={1}>
                    Tap to load
                  </Text>
                </Body>
                <Right style={{ borderBottomColor: 'white' }}>
                  <Text note>{snap.timestamp}</Text>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

export default connect(({ currentUser }) => ({ currentUser }))(SnapsScreen)
