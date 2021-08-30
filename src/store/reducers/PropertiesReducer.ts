import { SET_PROPERTIES } from "../types/PropertiesTypes";

const initialState = {
  properties: null,
};

const PropertiesReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_PROPERTIES:
      return { ...state, properties: payload };

    default:
      return state;
  }
};

export default PropertiesReducer;
