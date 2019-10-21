import React from 'react';
import logo from './qolabi_logo.jpg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ArticleList from "./component/ArticleList";
import SubmitForm from "./component/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const client = new ApolloClient({
    uri:'https://api.graph.cool/simple/v1/cjsz0uyu05b2d0122iw4gdly2'
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>

            <div className="header">
                <img src={logo} alt="Logo" style={{ width: 44.65, height: 50, margin: 47}}/>
                <h1 className="qollabi-dev-tribu">Qollabi Dev Tribu</h1>
                <Link to="/new_event" className="btn">Share a link</Link>
            </div>
            <Route exact path="/" component={ArticleList}/>
            <Route exact path="/new_event" component={SubmitForm}/>
        </Router>

      {/*<header className="App-header">*/}
      {/*    <div>*/}
      {/*        <img className="App-logo" src={logo} alt="Logo"/>*/}
      {/*        <span style={{marginTop: 85}}><h1 className="qollabi-dev-tribu">Qollabi Dev Tribu</h1></span>*/}
      {/*    </div>*/}
      {/*</header>*/}
    </ApolloProvider>
  );
}

export default App;
