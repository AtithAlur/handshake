import React from 'react';
import {Container} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';

import Chirps from '../components/Chirps';
import CreateChirp from '../components/CreateChirp';


type HomeProps = {}
const Home = (props: HomeProps) => {
  return(
    <Container>
        <Switch>
        <Route exact path='/' component={Chirps} >
        </Route>
        <Route path='/create-chirp' component = {CreateChirp}>
        </Route>
      </Switch>
    </Container>
  )
}

export default Home;