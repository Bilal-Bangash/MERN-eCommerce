import React from "react";
import { Container } from "react-bootstrap";
import { Header, Footer } from "./components";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to E-Commerce</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
