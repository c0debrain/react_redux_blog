import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import BlogFull from './components/BlogFull';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

const App = () => ( 
<Fragment>
  <Navbar />
  <h1 style={{ alignContent: "center" }}>Blog</h1>
  <br />
  <Switch>
    <Route exact path="/" component={BlogList} />
    <Route exact path="/new" component={BlogForm} />
    <Route exact path="/blog/:id" component={BlogFull} />
    <Route component={NoMatch} />
  </Switch>
</Fragment>
);

export default App;
