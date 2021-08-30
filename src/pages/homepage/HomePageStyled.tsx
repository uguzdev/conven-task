import styled from "styled-components";
import { COLORS, device, FONTS } from "../../commons/constants/Constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ListingWrapper = styled.div`
  flex: 3;
  height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.mainGreen};
    border-radius: 10px;
  }
`;

export const PropertyList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 20px;
  flex-flow: row wrap;
`;

export const MapWrapper = styled.div`
  flex: 2;
  @media ${device.mobileL} {
    display: none;
  }
`;

export const PageTitle = styled.h2`
  color: ${COLORS.titleBlack};
  font-family: ${FONTS.openSans};
  font-size: 25px;
  padding: 20px;
  text-align: left;
`;

export const ListingSummary = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const SummaryText = styled.span`
  color: ${COLORS.lightBlack};
  font-family: ${FONTS.openSans};
  font-size: 16px;
  font-weight: 600;
`;

export const OrderWrapper = styled.span`
  flex: 2;
  display: flex;
  justify-content: flex-end;
`;

export const LoaderWrapper = styled.div`
  flex: 1;
  height: 50vh;
  justify-content: center;
  display: flex;
  align-items: center;
`;
