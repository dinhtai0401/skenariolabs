import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss"

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.skenariolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="header__image" src="https://www.skenariolabs.com/images/logo.png" alt="logoskenariolabs" />
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
