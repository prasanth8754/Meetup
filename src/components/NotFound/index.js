import {NotFoundCont, NotFoundImg} from './styledComponents'
import {Heading} from '../Register/styledComponents'

const NotFound = () => (
  <NotFoundCont>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Heading as="p" para>
      We are sorry, the page you requested could not be found.
    </Heading>
  </NotFoundCont>
)

export default NotFound
