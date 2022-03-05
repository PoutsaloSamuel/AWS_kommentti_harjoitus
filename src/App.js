import React from "react";
import Content from "./Content.js";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }) {
  return (
    <div className="App">
      <header>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </header>
      <Content />
    </div>
  );
}

export default withAuthenticator(App);
