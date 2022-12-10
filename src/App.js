import React from 'react';
import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App({ isPassedToWithAuthenticator, signOut, user }) {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <button onClick={signOut}>A nico le gustan las cariñosas</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
