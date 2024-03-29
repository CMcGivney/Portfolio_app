import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Icon, Container } from "semantic-ui-react";
import moment from 'moment'

import { AuthContext } from "../providers/AuthProvider";

function PostItNotes(props) {
  const { user } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/notes");
      setNotes(result.data);
    };

    fetchData();
  }, []);

  const allNotes = () => {
    if (notes.length <= 0) return <h2>No Notes Yet...</h2>;
    return (
            <Card.Group stackable doubling className="corkboard" >
              {notes.map((note) => (
                <Card raised key={note.id}>
                  <Card.Content>
                    <Card.Header>{note.body}</Card.Header>
                    <Card.Meta>{note.username}</Card.Meta>
                    <Card.Meta>{moment(note.created_at).format("MMM Do YYYY, h:mm:ss a")}</Card.Meta>
                  </Card.Content>
                  {user ? (
                    user.id === note.user_id ? (
                      <Card.Content extra>
                        <Button
                          color="red"
                          icon="trash"
                          basic
                          onClick={() => destroyNote(note.id)}
                        ></Button>
                        <Link to={`/user/${user.id}/notes/${note.id}/edit`}>
                          <Button color="blue" icon="pencil" basic></Button>
                        </Link>
                      </Card.Content>
                    ) : null
                  ) : null}
                </Card>
              ))}
              </Card.Group>
            
         
    );
  };

  const destroyNote = (id) => {
    axios.delete(`/api/user/${user.id}/notes/${id}`).then((res) => {
      setNotes(notes.filter((q) => q.id !== id));
    });
  };

  const userPresent = () =>
    user ? (
      <Link to="/notes/new">
        <Button color="black">
          <Icon name="add" />
          New Note
        </Button>
      </Link>
    ) : (
      <Link to="/login">
        <Button color="black">
          <Icon name="add" />
          Login to Edit/Create Note
        </Button>
      </Link>
    );

  return (
    <Container style={{ marginTop: "5rem" }}>
      {userPresent()}
      {allNotes()}
    </Container>
  );
}

export default PostItNotes;
