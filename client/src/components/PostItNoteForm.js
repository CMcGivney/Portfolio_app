import React from 'react'
import { Form, Container, Button, Header,  } from 'semantic-ui-react'
import axios from 'axios';
import {Link, } from 'react-router-dom'

class PostItNoteForm extends React.Component {
state = { body: '', name: '', }

 componentDidMount() {
   const { match: {params: {id, } } } = this.props
   if (id)
   axios.get(`/api/notes/${id}`)
   .then(res => {
     const{body, name,} = res.data
    this.setState({body, name, })
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
    const { body, name,  } = this.state
    return (
      <Container style={{marginTop: "100px"}}>
      <Header> {id ? 'Edit' : 'Add'} Note </Header>
      <Header as="h4">Note:</Header>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name="body"
        placeholder="I think this website is great!..."
        value={body}
        onChange={this.handleChange}
        required
        />
        <Header as="h4">Name:</Header>
        <Form.Input
        name="name"
        placeholder="Love, Mom"
        value={name}
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