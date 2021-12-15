import Banner from "components/Banner";
import Images from "constants/images";
import { removeBuilding } from "features/Building/buildingSlice";
import BuildingList from "features/Building/components/BuildingList";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "./styles.scss";

function MainPage(props) {
  const dispatch = useDispatch();
  const buildings = useSelector((state) => state.buildings);
  const history = useHistory();

  const handleBuildingEditClick = (building) => {
    console.log("Edit", building);
    const editBuilding = `/building/${building.id}`;
    history.push(editBuilding)
  };

  const handleBuildingRemoveClick = (building) => {
    console.log("Remove", building);
    const removeBuildingId = building.id;
    const action = removeBuilding(removeBuildingId);
    dispatch(action);
  };

  return (
    <div className="main-page">
      <Banner title="Check all buildings 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center main-page__text">
        <div className="py-3">
          <Link to="/building/add">
            <Button color="secondary" className="mr-2">
              Add New Building
            </Button>
          </Link>
        </div>

        <BuildingList
          buildingList={buildings}
          onBuildingEditClick={handleBuildingEditClick}
          onBuildingRemoveClick={handleBuildingRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
