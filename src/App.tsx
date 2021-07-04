import { Center, Container } from '@chakra-ui/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { HomePage } from './pages';
function App() {
  return (
    <Center h="100vh">
      <Container h="100vh" maxW="8xl" centerContent className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/hero/:id" component={HomePage} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Center>
  );
}

export default App;
