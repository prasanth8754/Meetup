import {createContext} from 'react'

const MeetupContext = createContext({
  isRegistered: false,
  isHavingErr: false,
  name: '',
  topic: '',
  onChangeName: () => {},
  onChangeTopic: () => {},
  onRegister: () => {},
})

export default MeetupContext
