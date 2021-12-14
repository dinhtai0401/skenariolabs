import Banner from "components/Banner";
import { addBuilding } from "features/Building/buildingSlice";
import BuildingForm from "features/Building/components/BuildingForm";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./styles.scss";

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log(values);

      setTimeout(() => {
        const action = addBuilding(values);
        console.log(action);
        dispatch(action);

        history.push("/building");
      }, 2000);
    });
  };

  return (
    <div className="add-edit">
      <Banner title="Add new buildings 😎" />

      <div className="add-edit__form">
        <BuildingForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
