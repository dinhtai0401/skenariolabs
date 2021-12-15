import Banner from "components/Banner";
import { addBuilding, updateBuilding } from "features/Building/buildingSlice";
import BuildingForm from "features/Building/components/BuildingForm";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { randomNumber } from "utils/common";
import "./styles.scss";

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { buildingId } = useParams();
  const isAddMode = !buildingId;

  const editedBuilding = useSelector((state) =>
    state.buildings.find((x) => x.id === +buildingId)
  );

  const initialValues = isAddMode
    ? {
        name: "",
        street: "",
        number: "",
        code: "",
        city: "",
        municipality: "",
        country: "",
        description: "",
        coordinate: [],
      }
    : editedBuilding;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log(values);

      setTimeout(() => {
        if (isAddMode) {
          const newBuilding = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          const action = addBuilding(values);
          console.log(action);
          dispatch(action);

          resolve(true);
          return;
        } else {
          const action = updateBuilding(values);
          dispatch(action);
        }
        history.push("/building");
      }, 2000);
    });
  };

  return (
    <div className="add-edit">
      <Banner title="Add new buildings 😎" />

      <div className="add-edit__form">
        <BuildingForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
