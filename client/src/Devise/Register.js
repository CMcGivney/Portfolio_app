import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = { name: "", email: "", password: "", passwordConfirmation: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirmation } = this.state;
    const {
      auth: { handleRegister },
      history,
    } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ name, email, password, passwordConfirmation }, history);
    else alert("Passwords Do Not Match!");
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, passwordConfirmation } = this.state;

    return (
      <Segment basic style={formStyles}>
        <Header as="h1">
          Register
        </Header>
        <Form onSubmit={this.handleSubmit}>
          {/* <Form.Input
            label="Username"
            required
            autoFocus
            name="name"
            value={name}
            placeholder="Username"
            onChange={this.handleChange}
            type="text"
          /> */}
          <Form.Input
            label="Email"
            required
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
            type="text"
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
          <Form.Input
            label="Password Confirmation"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Password Confirmation"
            type="password"
            onChange={this.handleChange}
          />
          <Segment basic>
            <Button primary type="submit">
              Submit
            </Button>

            <Link to="/login">
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
  // textAlign: "center"
}
export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {(auth) => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
