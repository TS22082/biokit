import React, { Component } from 'react'
import {TextInput, Form, FormGroup, Card, Container, Row, Column} from 'biokit'

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
  alertMessage = e => {
    e.preventDefault();
    alert("working");
  }
  render () {
    return (
      <Container
        fluid={false}>
        <Row>
          <Column sm={'12'} md={'12'} lg={'6'}>
            <Card
              rounded={'0'}
              spacing={'mt-0'}
              icon={<i className='mdi mdi-account-box mr-2'/>}
              title={'Sign In'}>
              <Form>
                <FormGroup>
                  <TextInput
                    inputTitle={'Password'}
                    type={'password'}
                    placeholder={'Please enter name'}
                    handleChange={this.handleNameChange}
                    text={this.state.name}
                  />
                  <TextInput
                    inputTitle={'Email'}
                    type={'email'}
                    placeholder={'Please enter name'}
                    handleChange={this.handleEmailChange}
                    text={this.state.email}
                  />
                </FormGroup>
              </Form>
            </Card>
          </Column>
          <Column sm={'12'} md={'12'} lg={'6'}>
            <Card
              rounded={'0'}
              spacing={'mt-0'}
              icon={<i className='mdi mdi-grid mr-2'/>}
              title={'Container List'}>
              <p>Its good?</p>
            </Card>
          </Column>
        </Row>
      </Container>
    )
  }
}
