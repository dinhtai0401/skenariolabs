import Banner from "components/Banner";
import { removeBuilding } from "features/Building/buildingSlice";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.scss";

function TablePage(props) {
  const dispatch = useDispatch();
  const buildings = useSelector((state) => state.buildings);
  const history = useHistory();

  const handleBuildingEditClick = (building) => {
    const editBuilding = `/building/${building.id}`;
    history.push(editBuilding);
  };

  const handleBuildingRemoveClick = (building) => {
    const removeBuildingId = building.id;
    const action = removeBuilding(removeBuildingId);
    dispatch(action);
  };

  return (
    <div className="building-table">
      <Banner title="Add new buildings 😎" />
      
        <Table striped bordered hover className="building-table__table" size="sm" responsive>
          <thead>
            <tr>
              <th>Name of the building</th>
              <th>Street</th>
              <th>Number</th>
              <th>Postal Code</th>
              <th>City</th>
              <th>Municipality</th>
              <th>Country</th>
              <th>Description</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {buildings.map((building) => (
            <tr key={building.id}>
              <td>{building.name}</td>
              <td>{building.street}</td>
              <td>{building.number}</td>
              <td>{building.code}</td>
              <td>{building.city}</td>
              <td>{building.municipality}</td>
              <td>{building.country}</td>
              <td>{building.description}</td>
              <td>{building.coordinate[1]}</td>
              <td>{building.coordinate[0]}</td>
              <td>
                <Button variant="primary" onClick={() => handleBuildingEditClick(building)}>Primary</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleBuildingRemoveClick(building)}>Danger</Button>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
    </div>
  );
}

export default TablePage;
