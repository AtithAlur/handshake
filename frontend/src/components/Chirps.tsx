import React from 'react';
import {Container, Row, Col, Nav, Button} from 'react-bootstrap';


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
    this.fetchVotes();
  }

  fetchVotes(){
    Backend.fetchChirps().then((response: any) => {
      if(response.status === 200){
        let chirps = response.data;
        this.setState({chirps: chirps})
      }
    }).catch((err: any) => {
      
    });
  }

  handleUpVote(id: string){
    let data = {up_vote: 'true'}
    Backend.voteChirp(id, data).then((response: any) => {
      this.fetchVotes()
    });
  }

  handleDownVote(id: string){
    let data = {up_vote: 'false'}
    Backend.voteChirp(id, data).then((response: any) => {
      this.fetchVotes()
    });
  }
  render(){
    return(
    <Container>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/create-chirp">Create Chirp</Nav.Link>
        </Nav.Item>
      </Nav>
      <h1>Chirps:</h1>
      <Row>
        <Col lg='3' md='3' sm = '3'>
          <ul className='Chirps-ul'>
            {

              this.state.chirps.map((chirp, index) => {
                console.log(chirp)
                return(
                <li key={index+1}>
                  {chirp.id} -- {chirp.text} -- {chirp.vote.count}
                  <Button onClick={() => this.handleUpVote(chirp.id)} > Up vote</Button>
                   -- <Button onClick={() => this.handleDownVote(chirp.id)} > Down vote</Button>
                </li>
                )
              }
              )
            }
          </ul>
        </Col>
      </Row>

    </Container>
    );
  }
}