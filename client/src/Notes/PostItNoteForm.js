import React, { useContext, useState, useEffect } from "react";
import { Form, Container, Button, Header } from "semantic-ui-react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "../util/hooks";

function PostItNoteForm() {
  const { values, onChange } = useForm({
    body: "",
    username: "",
  });

  const { push } = useHistory();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const {edit, setEdit} = useState()

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`/api/user/${user.id}/notes/${id}`)
        .then((res) => {
          const { username, body } = res.data;
          setEdit(username, body);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, []);

  const { body, username } = { values };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`/api/user/${user.id}/notes/${id}`, values)
        .then((res) => push("/contact"));
    } else {
      axios
        .post(`/api/user/${user.id}/notes`, values)
        .then((res) => push("/contact"));
    }
  };

  return (
    <Container style={{ marginTop: "5rem" }}>
      <Header style={{ textDecoration: "underline" }}>
        {" "}
        {id ? "Edit Your" : "Add A"} Note{" "}
      </Header>
      <Header as="h4" style={{ textAlign: "left" }}>
        Note:
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="body"
          placeholder="example: I think this website looks great!..."
          value={body}
          onChange={onChange}
          required
        />
        <Header as="h4" style={{ textAlign: "left" }}>
          Name:
        </Header>
        <Form.Input
          name="username"
          placeholder="Username"
          value={username}
          onChange={onChange}
          required
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
