import { PropertyI } from "../../interfaces/property";
import { SET_PROPERTIES } from "../types/PropertiesTypes";

export const setProperties = (properties: PropertyI[]) => ({
  type: SET_PROPERTIES,
  payload: properties,
});
