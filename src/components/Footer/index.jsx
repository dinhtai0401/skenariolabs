import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Footer.scss";

function Footer(props) {
  return (
    <header className="footer">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <div className="footer__title">About SkenarioLabs</div>
          </Col>

          <Col xs="auto">
            <div className="footer__title">Service and Support</div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Footer;
