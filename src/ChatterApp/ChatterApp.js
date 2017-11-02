import React, {Component} from 'react'
import DATA from './DATA'
import './styles.css'
import faker from 'faker'
import ChatBox from './ChatBox'
import Chats from './Chats'




class ChatterApp extends Component {
  state = {
    chats: undefined
  }
  componentDidMount () {
    // alert('COMPONENT DID MOUNT!')

    setTimeout(() => {
      this.setChatData()
    }, 1000)
  }
  setChatData = () => {
    // alert('ABOUT TO SET CHAT DATA')
    let chatsArr = []
    for (let i = 0; i < 11; i++) {
      let chat = {
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        message: faker.random.words()
      }
      chatsArr.push(chat)
    }

    this.setState({ chats: chatsArr})
  }
  render () {
    return (
      <div>
        <h1>Hello ChatterApp</h1>
        {
          this.state.chats ? <Chats chats={this.state.chats} /> : 'Loading...'
        }
      </div>
    )
  }
}

export default ChatterApp
