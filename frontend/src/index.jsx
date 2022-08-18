import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import FirebaseProvider from '../utils/firebase';

ReactDOM.render(
  <FirebaseProvider>
    <Router>
      <App />
    </Router>
  </FirebaseProvider>,
  document.getElementById('root'),
);
