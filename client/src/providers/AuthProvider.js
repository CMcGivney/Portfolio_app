import React from "react";
import axios from "axios";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        console.log(res.data.data)
        history.push("/notes/new");
      })
    .catch(function (error) {
      if(error.response) {
      // console.log("error", error.response.status);
      // console.log(error.response.headers);
      // console.log(error.response.data);
      alert(error.response.data.errors[0])
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
  }
  
  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/contact");
      })
      .catch(function (error) {
        if(error.response) {
        // console.log("error", error.response.status);
        // console.log(error.response.headers);
        // console.log(error.response.data.errors[0]);
        // console.log(error.request);
        alert(error.response.data.errors[0])
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
  }
  
  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
        history.push('/contact');
      })
      .catch( res => {
        console.log(res);
      })
  }
  
  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};