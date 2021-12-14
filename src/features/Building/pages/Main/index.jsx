import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "./styles.scss";

function MainPage(props) {
  return (
    <div className="main-page">
      <Banner title="Check all buildings 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center main-page__text">
        <Link to="/add">
          <Button color="secondary" className="mr-2">
            Add New Building
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default MainPage;