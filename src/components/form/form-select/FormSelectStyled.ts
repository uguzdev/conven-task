import styled from "styled-components";
import { COLORS, FONTS } from "../../../commons/constants/Constant";

export const Select = styled.select`
  padding: 10px;
  font-family: ${FONTS.openSans};
  font-weight: 600;
  border: 1px solid ${COLORS.borderGray};
  border-radius: 5px;
`;
