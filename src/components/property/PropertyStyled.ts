import styled, { createGlobalStyle } from "styled-components";
import { COLORS, device, FONTS } from "../../commons/constants/Constant";

export const Wrapper = styled.div`
  padding: 10px;
  width: 30%;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const Inner = styled.div`
  align-self: stretch;
  border: 1px solid ${COLORS.borderGray};
  border-radius: 5px;
`;

export const PropertyType = styled.span`
  color: ${COLORS.titleBlack};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 11px;
  font-weight: 700;
  text-align: left;
  margin-top: 7px;
`;

export const PropertyTitle = styled.h4`
  color: ${COLORS.black};
  font-family: ${FONTS.openSans};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  margin: 5px 0px;
`;

export const PropertyLocation = styled.span`
  color: ${COLORS.titleBlack};
  font-family: ${FONTS.openSans};
  font-weight: 600;
  text-align: left;
  font-size: 14px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 0px;
`;

export const SlideWrapper = styled.div``;

export const SlideImage = styled.img`
  width: 100%;
`;

export const Properties = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 15px;
  width: 70%;
`;

export const PropertyWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const PropertyIcon = styled.img`
  width: 20px;
`;

export const PropertyText = styled.span`
  font-size: 12px;
  font-family: ${FONTS.openSans};
  color: ${COLORS.titleBlack};
  margin-left: 2px;
  font-weight: 600;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

export const PriceWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

export const RentPriceText = styled.span`
  font-family: ${FONTS.openSans};
  font-weight: 700;
  color: ${COLORS.textGray};
  font-size: 12px;
  text-align: left;
`;

export const TotalPriceText = styled(RentPriceText)`
  font-size: 14px;
  color: ${COLORS.offGreen};
  margin-top: 5px;
`;

export const ActionsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.button`
  border-radius: 50%;
  border: 1px solid ${COLORS.borderGray};
  background: transparent;
  margin-left: 5px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${COLORS.mainGreen};
  }
`;

export const ActionIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export const CustomStyle = createGlobalStyle`
.indicators{
    margin-top: -20px !important;
}

.each-slideshow-indicator:before{
    background: ${COLORS.white} !important;
}

.react-slideshow-container .default-nav , .react-slideshow-container .default-nav:hover ,.react-slideshow-container .default-nav:focus{
    fill:white;
    background: transparent;
}
`;
