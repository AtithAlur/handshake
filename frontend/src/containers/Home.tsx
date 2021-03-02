import React from 'react';
import {Container} from 'react-bootstrap';

import Chirps from '../components/Chirps';

type HomeProps = {}
const Home = (props: HomeProps) => {
  return(
    <Container>
          <Chirps />
    </Container>
  )
}

export default Home;