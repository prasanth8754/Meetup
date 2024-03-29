import {Link} from 'react-router-dom'
import MeetupContext from '../../ReactContext/MeetupContext'
import Header from '../Header'
import {BgCont, Heading, Button} from '../Register/styledComponents'
import {HomeCont, HomeImg, Heading2} from './styledComponents'

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

const Home = props => (
  <MeetupContext.Consumer>
    {value => {
      const {isRegistered, name, topic} = value

      const topicValue = topicsList.filter(eachItem => eachItem.id === topic)[0]
        .displayText

      return (
        <BgCont>
          <Header />

          <HomeCont>
            {isRegistered === false && (
              <>
                <Heading>Welcome to Meetup</Heading>
                <Heading as="p" para>
                  Please register for the topic
                </Heading>
                <Link to="/register">
                  <Button type="button">Register</Button>
                </Link>
              </>
            )}
            {isRegistered && (
              <>
                <Heading2>Hello {name}</Heading2>
                <Heading2 as="p" bold>
                  Welcome to {topicValue}
                </Heading2>
              </>
            )}

            <HomeImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeCont>
        </BgCont>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
