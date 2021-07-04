import { Center, Container } from '@chakra-ui/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { HomePage, Hero } from './pages';
function App() {
  return (
    <Center h="100vh">
      <Container h="100vh" maxW="8xl" centerContent className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/hero/:id" component={Hero} />
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
