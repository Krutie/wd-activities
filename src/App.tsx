import React from "react";
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

import { Profile } from './Views/Profile';
import { SlideShow } from './Views/SlideShow';

const NAV = styled.div`
  position: sticky;
  top: 0;
  padding: 10px;
  & a {
    padding: 5px;
  }
`;

function App() {
  return (
    <main>
      <NAV>
        <Link to='/'>Home</Link>
        <Link to='/slideshow'>slideshow</Link>
      </NAV>
      <Switch>
        <Route path='/' component={Profile} exact />
        <Route path='/slideshow' component={SlideShow} />
      </Switch>
    </main>
  );
}

export default App;
