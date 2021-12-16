import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link"
              href="https://www.skenariolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="header__image"
                src="https://www.skenariolabs.com/images/logo.png"
                alt="logoskenariolabs"
              />
            </a>
          </Col>

          <Col xs="auto" className="header__second">
            <Row xs="auto">
              <Link
                to="/"
                className="header__link header__title"
                activeclassname="header__link--active"
              >
                Buidling
              </Link>
              <Link
                to="/building/table"
                className="header__link header__title"
                activeclassname="header__link--active"
              >
                Table
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
