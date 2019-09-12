import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import { AuthProvider, } from "./providers/AuthProvider"
import { initMiddleware, } from 'devise-axios'
import * as serviceWorker from './serviceWorker'

initMiddleware()

ReactDOM.render(
  <AuthProvider>
    <Router>
     <App />
    </Router>
  </AuthProvider>,
document.getElementById('root'))


serviceWorker.unregister()
