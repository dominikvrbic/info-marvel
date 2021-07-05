import { Image, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import logo from './assets/Marvel_Logo.svg';

import { HomePage, Hero } from './pages';
function App() {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <Router>
        <Flex justifyContent="center" alignItems="center" bg="#303030" w="100%">
          <Link to="/">
            <Image my="1.5rem" h="4rem" src={logo} alt="marvel" />
          </Link>
        </Flex>
        <Container h="100vh" maxW="8xl" centerContent className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/hero/:id" component={Hero} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Flex>
  );
}

export default App;
