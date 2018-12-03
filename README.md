# biokit

> ui component kit for bionet

[![NPM](https://img.shields.io/npm/v/biokit.svg)](https://www.npmjs.com/package/biokit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Clone project

```bash
git clone https://github.com/TS22082/biokit.git
cd biokit
npm install
```

## Work on project

```bash
cd biokit
npm run
```
create new tab or new terminal window and navigate to root folder of project

```bash
cd example
npm run
```

## Install

```bash
npm install --save biokit
```

## Usage

This library assumes you have the latest bootstrap and mdi icons package imported through. The latest CDN links needed at the time of writing are:

```html
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.8.94/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
```

```jsx
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
```

## License

MIT © [TS22082](https://github.com/TS22082)
