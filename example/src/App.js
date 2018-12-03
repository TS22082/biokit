import React, { Component } from 'react'
import {TextInput, Form, FormGroup, Card, Container, Row, Column} from 'biokit'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pw: '',
      pw2: '',
    };
  }
  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };
  handlePwChange = e => {
    const pw = e.target.value;
    this.setState({ pw });
  };
  handlePw2Change = e => {
    const pw2 = e.target.value;
    this.setState({ pw2 });
  };
  handleEmailChange = e => {
    const email = e.target.value;
    this.setState({ email });
  };
  
  pwMatch = () => {
    if (this.state.pw === this.state.pw2){
      return true
    } else {
      return false
    }
  }

  validPw = (pw) => {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(pw)
  }

  render () {
    return (
      <Container
        fluid={true}>
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
                    inputTitle={'Username'}
                    type={'text'}
                    name={'name'}
                    placeholder={'Please enter text'}
                    handleChange={this.handleNameChange}
                    text={this.state.name}
                    theme={'light'}
                  />
                  <TextInput
                    inputTitle={'Email'}
                    type={'email'}
                    name={'email'}
                    placeholder={'Please enter name'}
                    handleChange={this.handleEmailChange}
                    text={this.state.email}
                    theme={'light'}
                  />
                  <TextInput
                    inputTitle={'Password'}
                    type={'password'}
                    name={'password'}
                    placeholder={'Please enter password'}
                    handleChange={this.handlePwChange}
                    text={this.state.pw}
                    theme={'light'}
                    trueWhen={this.validPw(this.state.pw)}
                    falseMessage={'Needed:  minimum six charectures: one number, one lowercase and one uppercase letter'}
                  />
                  <TextInput
                    inputTitle={'Password'}
                    type={'password'}
                    name={'pw'}
                    placeholder={'Please repeat password'}
                    handleChange={this.handlePw2Change}
                    text={this.state.pw2}
                    theme={'light'}
                    trueWhen={this.pwMatch()}
                    falseMessage={'Does not match first password'}
                  />
                </FormGroup>
              </Form>
            </Card>
          </Column>
          <Column sm={'12'} md={'12'} lg={'6'}>
            <Card
              rounded={'0'}
              spacing={'mt-0'}
              icon={<i className='mdi mdi-account-box mr-2'/>}
              title={'example card with content'}>
              <h3>Inspirational quote</h3>
              <p>Not every day is going to offer us a chance to save somebody's life, but every day offers us an opportunity to affect one.</p>
              <p>- Mark Bezos</p>
              <iframe width="100%" height="350" src="https://www.youtube.com/embed/GVG4wgCqeEQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Card>
          </Column>
        </Row>
      </Container>
    )
  }
}
