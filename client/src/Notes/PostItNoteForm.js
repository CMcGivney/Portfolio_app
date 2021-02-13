import React, { useContext, useState, useEffect } from "react";
import { Form, Container, Button, Header } from "semantic-ui-react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "../util/hooks";
import {useFormInput, } from "../util/useFormInput"

function PostItNoteForm() {
const body = useFormInput("")
const username = useFormInput("")

  const { push } = useHistory();
  const {params, id } = useParams();
  const { user } = useContext(AuthContext);
  const {edit, setEdit} = useState()

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`/api/user/${user.id}/notes/${id}`, {notes: username.value, body: body.value, })
        .then((res) => push("/contact"));
    } else {
      axios
        .post(`/api/user/${user.id}/notes`, {notes: username.value, body: body.value, })
        .then((res) => push("/contact"));
    }
  };
 useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`/api/user/${user.id}/notes/${id}`)
        .then((res) => {
          setEdit(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, );
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Header style={{ textDecoration: "underline" }}>
        {" "}
        {id ? "Edit Your" : "Add A"} Note{" "}
        <p>{id}</p>
      </Header>
      <Header as="h4" style={{ textAlign: "left" }}>
        Note:
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="body"
          placeholder="example: I think this website looks great!..."
          value={body}
          // onChange={onChange}
          required
          {...body}
        />
        <Header as="h4" style={{ textAlign: "left" }}>
          Name:
        </Header>
        <Form.Input
          name="username"
          placeholder="Username"
          value={username}
          // onChange={onChange}
          required
          {...username}
        />

        <Button color="green" inverted>
          Submit
        </Button>
        <Link to="/contact">
          <Button color="blue" inverted>
            Back
          </Button>
        </Link>
      </Form>
    </Container>
  );
}

export default PostItNoteForm;
