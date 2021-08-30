import axios from "axios";
import { PropertySearchResultI } from "../../interfaces/property";

export const getPropertiesApi = async () => {
  return Promise.resolve(
    axios.get<PropertySearchResultI>("https://myjson.dit.upm.es/api/bins/iu0")
  ).then((res) => res.data);
};
