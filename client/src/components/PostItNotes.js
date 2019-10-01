import React from "react"
import axios from 'axios'
import {Link, } from "react-router-dom"
import {Card, Grid, Button, Icon, Container, } from "semantic-ui-react"
import { AuthConsumer, } from "../providers/AuthProvider"

class PostItNotes extends React.Component {
  
state = { notes: [], }

  componentDidMount() {
    axios.get("/api/notes")
      .then( res => { 
        this.setState({ notes: res.data })
     })
     .catch( err => {
       console.log(err.response)
     })
  }


  allNotes = () => {
    const user = AuthConsumer
    const {notes} = this.state
    if (notes.length <= 0)
    return <h2>No Notes Yet...</h2>
    return (
      
  <Grid stackable container style={{marginTop: "25px"}}>
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
                    {note.name}
                   </Card.Meta>
                </Card.Content>
                
            { user ? 
             <Card.Content extra>
              <Button 
                color='red' 
                icon basic 
                onClick={() => this.destroyNote(note.id)}
                >
                <Icon name='trash' /> 
              </Button>
              <Link to={`/notes/${note.id}/edit`}>
               <Button 
                 color='blue' 
                 icon basic 
                 >
                <Icon name='pencil' />
               </Button>
              </Link>
             </Card.Content>
            :
            <div></div>
          }
       </Card>
         )
        }
     </Card.Group>
    </Grid.Column>
   </Grid.Row>
  </Grid>
  )
}


    
    destroyNote = (id) => {
      axios.delete(`/api/notes/${id}`)
      .then(res => {
        const {notes, } = this.state
        this.setState({notes: notes.filter(q => q.id !== id), })
      })
    }
    
    
    render() {
      return(
        
        <Container style={{marginTop: "25px"}}>
          <Link to="/notes/new">
           <Button inverted color="black">
            <Icon name="add" />
              Leave me a Note!
            </Button>
          </Link>
        {this.allNotes()}
      </Container>
      
      )
    }
  }
  
  export default PostItNotes
  