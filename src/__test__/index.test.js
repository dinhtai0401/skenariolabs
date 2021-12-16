import reducer, {
  addBuilding,
  removeBuilding,
  updateBuilding,
} from "features/Building/buildingSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual([
    {
      id: 1,
      name: "test",
      street: "test",
      number: "test",
      code: "test",
      city: "test",
      municipality: "test",
      country: "test",
      description: "test",
      coordinate: [25.521308, 65.012369],
    },
  ]);
});

test("should handle a addBuilding being added to an empty list", () => {
  const previousState = [];
  expect(
    reducer(
      previousState,
      addBuilding({
        id: 9999,
        name: "test",
        street: "test",
        number: "test",
        code: "test",
        city: "test",
        municipality: "test",
        country: "test",
        description: "test",
        coordinate: [25.521308, 65.012369],
      })
    )
  ).toEqual([
    {
      id: 9999,
      name: "test",
      street: "test",
      number: "test",
      code: "test",
      city: "test",
      municipality: "test",
      country: "test",
      description: "test",
      coordinate: [25.521308, 65.012369],
    },
  ]);
});

test("should handle a addBuilding being added to an existing list", () => {
  const previousState = [
    {
      id: 9999,
      name: "test",
      street: "test",
      number: "test",
      code: "test",
      city: "test",
      municipality: "test",
      country: "test",
      description: "test",
      coordinate: [25.521308, 65.012369],
    },
  ];
  expect(
    reducer(
      previousState,
      addBuilding({
        id: 9999,
        name: "test",
        street: "test",
        number: "test",
        code: "test",
        city: "test",
        municipality: "test",
        country: "test",
        description: "test",
        coordinate: [25.521308, 65.012369],
      })
    )
  ).toEqual([
    {
      id: 9999,
      name: "test",
      street: "test",
      number: "test",
      code: "test",
      city: "test",
      municipality: "test",
      country: "test",
      description: "test",
      coordinate: [25.521308, 65.012369],
    },
    {
      id: 9999,
      name: "test",
      street: "test",
      number: "test",
      code: "test",
      city: "test",
      municipality: "test",
      country: "test",
      description: "test",
      coordinate: [25.521308, 65.012369],
    },
  ]);
});

test("should update the initial state", () => {
  const previousState = [
    {
      id: 9999,
      name: "test",
      street: "test",
      number: "test",
      code: "test",
      city: "test",
      municipality: "test",
      country: "test",
      description: "test",
      coordinate: [25.521308, 65.012369],
    },
  ];
  expect(
    reducer(
      previousState,
      updateBuilding({
        id: 9999,
        name: "updated test",
        street: "updated test",
        number: "updated test",
        code: "updated test",
        city: "updated test",
        municipality: "updated test",
        country: "updated test",
        description: "updated test",
        coordinate: [25.521308, 65.012369],
      })
    )
  ).toEqual([
    {
      id: 9999,
      name: "updated test",
      street: "updated test",
      number: "updated test",
      code: "updated test",
      city: "updated test",
      municipality: "updated test",
      country: "updated test",
      description: "updated test",
      coordinate: [25.521308, 65.012369],
    },
  ]);
});

test("should delete the initial state", () => {
  const previousState = [
    {
      id: 9999,
      name: "test",
      street: "test",
      number: "test",
      code: "test",
      city: "test",
      municipality: "test",
      country: "test",
      description: "test",
      coordinate: [25.521308, 65.012369],
    },
  ];
  expect(reducer(previousState, removeBuilding(9999))).toEqual([]);
});
