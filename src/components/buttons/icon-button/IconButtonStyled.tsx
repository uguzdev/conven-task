import styled from "styled-components";
import { COLORS, FONTS } from "../../../commons/constants/Constant";

export const ButtonWrapper = styled.button`
  background: none;
  border: 1px solid ${COLORS.borderGray};
  border-radius: 5px;
  cursor: pointer;
  padding: 0 10px;
  display: flex;
  align-items: center;
  max-height: 40px;
  margin-left: 10px;

  &:hover {
    background: ${COLORS.borderGray};
  }
`;

export const ButtonText = styled.span`
  font: bold 13px ${FONTS.openSans};
  color: ${COLORS.lightBlack};
`;

export const ButtonIcon = styled.img`
  width: 20px;
  padding-right: 10px;
`;
