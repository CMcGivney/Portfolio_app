import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { Form, Container, Button, Header } from "semantic-ui-react";

import { AuthContext } from "../providers/AuthProvider";

const PostItNoteForm = () => {
  const [values, setValues] = useState({});
  const { push } = useHistory();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  // fetching users data to edit
  useEffect(() => {
    const fetchNoteData = async () => {
      if (id) {
        await axios
          .get(`/api/user/${user.id}/notes/${id}`)
          .then((res) => {
            console.log(res.data);
            setValues(res.data);
          })
          .catch((error) => {
            console.log(error.response);
          });
      } else {
        alert`Thank you for leaving a note`;
        //I would like to push the user.name to the notes.username on notes but ow well, next time
      }
    };
    fetchNoteData();
  }, [id, user.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (id) {
      axios
        .put(`/api/user/${user.id}/notes/${id}`, values)
        .then((res) => push("/contact"))
        .catch(function (error) {
          if (error.response) {
            alert`Error, ${error.response} please try again`;
            console.log(error.response);
          }
        });
    } else {
      axios
        .post(`/api/user/${user.id}/notes`, values)
        .then((res) => push("/contact"));
    }
  };
  return (
    <Container style={{ marginTop: "6.5rem" }}>
      <Header style={{ textDecoration: "underline" }}>
        {" "}
        {id ? "Edit Your" : "Create A"} Note
      </Header>

      <Header as="h4" style={{ textAlign: "left" }}>
        Note:
      </Header>

      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="body"
          placeholder="example: I think this website looks great!..."
          value={values.body}
          onChange={handleChange}
          required
          type="text"
        />

        <Header as="h4" style={{ textAlign: "left" }}>
          Name:
        </Header>
        <Form.Input
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          required
          type="text"
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
};

export default PostItNoteForm;
