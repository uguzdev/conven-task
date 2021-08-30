import React, { FC } from "react";
import { Select } from "./FormSelectStyled";

interface FormSelectProps {
  options?: Array<{
    name: string;
    value: any;
  }>;
}

const FormSelect: FC<FormSelectProps> = ({ options }) => {
  return (
    <Select>
      {options?.map((item) => (
        <option value={item.value}>{item.name}</option>
      ))}
    </Select>
  );
};

export default FormSelect;
