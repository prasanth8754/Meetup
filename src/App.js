import {Component} from 'react'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import MeetupContext from './ReactContext/MeetupContext'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].id,
    isRegistered: false,
    isHavingErr: false,
  }

  onChangeName = value => {
    this.setState({name: value})
  }

  onChangeTopic = value => {
    this.setState({topic: value})
  }

  onRegister = event => {
    event.preventDefault()
    const {history} = this.props
    const {name, topic} = this.state
    if (name !== '') {
      this.setState({isRegistered: true})
      history.replace('/')
    } else {
      this.setState({isHavingErr: true})
    }
  }

  render() {
    const {name, topic, isRegistered, isHavingErr} = this.state

    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          isHavingErr,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          onRegister: this.onRegister,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default withRouter(App)
