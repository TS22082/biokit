# biokit

> ui component kit for bionet

[![NPM](https://img.shields.io/npm/v/biokit.svg)](https://www.npmjs.com/package/biokit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save biokit
```

## Usage

```jsx
import React, { Component } from 'react'
import {TextInput, Form} from 'biokit'

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
    )
  }
}
```

## License

MIT © [TS22082](https://github.com/TS22082)
