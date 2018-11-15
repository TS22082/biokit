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
import {TextInput, Form, FormGroup, Card} from 'biokit'

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
          <Form sm={"12"} md={"12"} lg={"4"}>
            <FormGroup>
              <TextInput
                inputName={"Name"}
                type={"text"}
                placeholder={"Please enter name"}
                handleChange={this.handleNameChange}
                text={this.state.name}
              />
              <TextInput
                inputName={"Email"}
                type={"email"}
                placeholder={"Please enter name"}
                handleChange={this.handleEmailChange}
                text={this.state.email}
              />
            </FormGroup>
          </Form>
        </Card>
      <Container/>
    )
  }
}
```

## License

MIT © [TS22082](https://github.com/TS22082)
