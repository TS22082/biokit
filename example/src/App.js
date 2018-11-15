import React, { Component } from 'react'
import {TextInput, Form, FormGroup, Card, Container} from 'biokit'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }
  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };
  handleEmailChange = e => {
    const email = e.target.value;
    this.setState({ email });
  };
  render () {
    return (
      <Container
        fluid={false}>
        <Card
          rounded={'0'}
          spacing={'mt-0'}
          icon={<i className='mdi mdi-grid mr-2'/>}
          title={'Container List'}>
          <Form sm={'12'} md={'12'} lg={'4'}>
            <FormGroup>
              <TextInput
                inputName={'Name'}
                type={'text'}
                placeholder={'Please enter name'}
                handleChange={this.handleNameChange}
                text={this.state.name}
              />
              <TextInput
                inputName={'Email'}
                type={'email'}
                placeholder={'Please enter name'}
                handleChange={this.handleEmailChange}
                text={this.state.email}
              />
            </FormGroup>
          </Form>
        </Card>
      </Container>
    )
  }
}
