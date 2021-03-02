import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Backend from '../actions/backend';

import './Chirps.css'


type chirpData = {
  id: string,
  text: string
}

type chirpProps = {}
type chirpState = {
  chirps: chirpData[]
}

export default class Chirps extends React.Component<chirpProps, chirpState> {

  constructor(props: chirpProps) {
    super(props)
    this.state = {
      chirps: []
    }
  }

  componentDidMount(){
    Backend.fetchChirps().then((response: any) => {
      if(response.status === 200){
        let chirps = response.data;
        this.setState({chirps: chirps})
      }
    }).catch((err: any) => {
      
    });
  }

  render(){
    return(
    <Container>
      <h1>Chirps:</h1>
      <Row>
        <Col lg='3' md='3' sm = '3'>
          <ul className='Chirps-ul'>
            {
              this.state.chirps.map((chirp, index) => <li key={index+1}>{chirp.id} -- {chirp.text}</li>)
            }
          </ul>
        </Col>
      </Row>
    </Container>
    );
  }
}