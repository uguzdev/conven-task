import styled from "styled-components";
import { COLORS, device, FONTS } from "../../commons/constants/Constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;

export const HeaderWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${COLORS.borderGray};
  display: flex;
  flex-direction: row;
  flex: 1;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: flex-start;
    padding: 4px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  @media ${device.mobileL} {
    width: 100%;
    margin-top: 10px;
    justify-content: flex-start;
    padding-bottom: 5px;

    & button {
      width: 100%;
      padding: 10px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

export const SearchDescription = styled.span`
  font-family: ${FONTS.openSans};
  color: ${COLORS.textGray};
  font-weight: 600;
`;

export const SearchLocation = styled.div`
  color: ${COLORS.black};
  margin-top: 5px;
  font-family: ${FONTS.openSans};
  font-weight: 700;
  font-size: 16px;
`;

export const BreadCrumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

export const BreadCrumb = styled.a`
  font-size: 14px;
  font-family: ${FONTS.openSans};
  color: ${COLORS.black};
  text-decoration: none;
  font-weight: 600;
  color: ${COLORS.textGray};
  display: flex;
  flex-direction: row;
  align-items: center;
  &:last-child {
    color: ${COLORS.black};
  }

  &:last-child img {
    display: none;
  }
`;

export const BreadCrumbIcon = styled.img`
  width: 10px;
  margin: 6px;
`;
