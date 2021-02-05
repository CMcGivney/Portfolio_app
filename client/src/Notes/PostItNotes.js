import React, {useContext, useState, useEffect} from "react"
import axios from 'axios'
import {Link, } from "react-router-dom"
import {Card, Grid, Button, Icon, Container, } from "semantic-ui-react"
import NotesForm from "./PostItNoteForm.js"
import { AuthContext } from "../providers/auth"

function PostItNotes(props) {
  const { user } = useContext(AuthContext);
  console.log(user)
  const [notes, setNotes]= useState([])

  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get("/api/notes");
        setNotes(result.data);
      };
   
      fetchData();
    }, []);

  const allNotes = () => {
    if (notes.length <= 0)
    return <h2>No Notes Yet...</h2>
    return (
      
  <Grid stackable style={{marginTop: "2rem"}}>
      <Grid.Row>
         <Grid.Column stackable= "true">
           <Card.Group className="corkboard">
            { notes.map( note => 
              <Card className="postIts" key={note.id} >
                <Card.Content >
                  <Card.Header>
                    {note.body}
                  </Card.Header>
                   <Card.Meta>
                    {note.username}
                   </Card.Meta>
                   <Card.Meta>
                    {note.created_at}
                   </Card.Meta>
                </Card.Content>
                
            
             {user && (
             <Card.Content extra>
              <Button 
                color='red' 
                icon="trash" 
                basic 
                onClick={() => destroyNote(note.id)
                }
                >
              </Button>
              <Link to={`/notes/${note.id}/edit`}>
               <Button 
                 color='blue' 
                 icon="pencil"
                 basic 
                 >
               </Button>
              </Link>

             </Card.Content>
             )}
       </Card>
         )
        }
     </Card.Group>
    </Grid.Column>
   </Grid.Row>
  </Grid>
  )
}

   const destroyNote = (id) => {
      axios.delete(`/api/notes/${id}`)
      .then(res => {
        const {notes, } = this.state
        setNotes({notes: notes.filter(q => q.id !== id), })
      })
    }
     const userPresent = () => {
       if (user) {
        return <Link to="/notes/new">
          <Button color="black">
           <Icon name="add" />
             Leave me a Note!
           </Button>
         </Link>
       } else {
         return <Link to="/login">
          <Button color="black">
           <Icon name="add" />
             Leave me a Note!
           </Button>
         </Link>
       }
       
     }
    
    
      return(
    
        <Container style={{marginTop:'5rem'}}>
        {userPresent()}
        {allNotes()}
      </Container>
      
      )
    }
  
 
  export default PostItNotes
  