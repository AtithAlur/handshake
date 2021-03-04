import React from 'react';

import CreateChirpForm from './forms/CreateChirpForm';
import {Container}  from 'react-bootstrap';


import Backend from '../actions/backend';
import {Route} from 'react-router-dom';

type CreateChirpProps={}
class CreateChirp extends React.Component<CreateChirpProps, {}> {
  constructor(props:CreateChirpProps){
    super(props)

  }

  handleSubmit(text: string) {
    Backend.postChirp(text)
    .then((response: any) => {
      console.log(response)
      if(response.status === 201 && response.data){
        console.log('Posted')
      }else{
        console.log('Error posting chirp')
      }
    })
    .catch((error: any) => {
      console.log('Error posting chirp')
    });
  }

  render(){
    return(
      <Container>
        <CreateChirpForm handleSubmit = {this.handleSubmit} />
      </Container>
    )
  }
}

export default CreateChirp;