import React from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";

class Login extends React.Component {
  state = { email: "", password: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.auth.handleLogin({ email, password }, this.props.history);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Segment basic style={formStyles}>
        <Header as="h2" >
          Please login to leave a note
        </Header>
        <Header as="p">
          register
          <Link as="a" to="/register">
            {" "}
            here{" "}
          </Link>
        </Header> 
        <Form onSubmit={this.handleSubmit}>
        
          <Form.Input
            label="Email"
            autoFocus
            required
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />
        
          <Segment basic>
            <Button primary type="submit">
              Submit
            </Button>
            <Link to="/contact">
              {" "}
              <Button primary type="back">
                Back
              </Button>
            </Link>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

const formStyles = {
  marginTop: "6rem",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {(auth) => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
