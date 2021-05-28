import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import { HomeScreen, ProductScreen, CartScreen } from "./screens";
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart/:id?" component={CartScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
