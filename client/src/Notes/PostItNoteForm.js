import React, {useContext} from 'react'
import { Form, Container, Button, Header,  } from 'semantic-ui-react'
import axios from 'axios';
import {Link, } from 'react-router-dom'
import { AuthContext } from "../providers/auth"

class PostItNoteForm extends React.Component {
  state = { body: '', username: "", }
  const { user } = useContext(AuthContext);

 componentDidMount() {
   const { match: {params: {id, } } } = this.props
   if (id)
   axios.get(`/api/notes/${id}`)
   .then(res => {
     const{body, username,} = res.data
    this.setState({body, username, })
   })
   .catch(err => {
     console.log(err.response)
   })
 }

 handleChange = (e) => {
  const { target: { name, value } } = e
  this.setState({ [name]: value })
}

handleSubmit = (e) => {
  e.preventDefault()
  const notes = { ...this.state }
  const { match: { params: { id } }, history: { push } } = this.props
  if (id) {
    axios.put(`/api/notes/${id}`, notes)
      .then(res => push("/contact"))
  } else {
    axios.post(`/api/notes`, notes)
      .then(res => push("/contact"))
  }
}


  render() {
    const { match: {params: {id, } } } = this.props
    const { body, username,  } = this.state
    return (
      <Container style={{marginTop:'3rem'}}>
      <Header style={{textDecoration: "underline"}}> {id ? 'Edit Your' : 'Add A'} Note </Header>
      <Header as="h4" style={{textAlign: "left"}}>Note:</Header>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name="body"
        placeholder="example: I think this website looks great!..."
        value={body}
        onChange={this.handleChange}
        required
        />
        <Header as="h4" style={{textAlign: "left"}}>Name:</Header>
        <Form.Input
        name="Username"
        placeholder={username}
        value={username}
        onChange={this.handleChange}
        required
        />
      
        <Button color="green" inverted>Submit</Button>
        <Link to="/contact">
        <Button color="blue" inverted>Back</Button>
        </Link>
        </Form>
      </Container>
    )
  }
}

export default PostItNoteForm