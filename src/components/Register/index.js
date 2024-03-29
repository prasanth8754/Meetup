import MeetupContext from '../../ReactContext/MeetupContext'
import Header from '../Header'
import {
  BgCont,
  Cont,
  RegisterImg,
  Form,
  Heading,
  Label,
  Input,
  Button,
  Para,
} from './styledComponents'

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

const Register = () => (
  <MeetupContext.Consumer>
    {value => {
      const {
        isHavingErr,
        name,
        topic,
        onChangeName,
        onChangeTopic,
        onRegister,
      } = value

      const changeName = event => {
        onChangeName(event.target.value)
      }

      const changeTopic = event => {
        onChangeTopic(event.target.value)
      }

      return (
        <BgCont>
          <Header />
          <Cont>
            <RegisterImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <Form onSubmit={onRegister}>
              <Heading>Let us join</Heading>
              <Label htmlFor="name">NAME</Label>
              <Input
                value={name}
                id="name"
                type="text"
                placeholder="Your name"
                onChange={changeName}
              />
              <Label htmlFor="topics">TOPICS</Label>
              <Input
                value={topic}
                id="topics"
                as="select"
                onChange={changeTopic}
              >
                {topicsList.map(eachItem => (
                  <option value={eachItem.id} key={eachItem.id}>
                    {eachItem.displayText}
                  </option>
                ))}
              </Input>
              <Button type="submit">Register Now</Button>
              {isHavingErr && <Para>Please enter your name</Para>}
            </Form>
          </Cont>
        </BgCont>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
