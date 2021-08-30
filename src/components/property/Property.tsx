import React, { FC } from "react";
import {
  ContentWrapper,
  CustomStyle,
  Inner,
  Properties,
  PropertyWrapper,
  PropertyLocation,
  PropertyTitle,
  PropertyType,
  SlideImage,
  SlideWrapper,
  Wrapper,
  PropertyIcon,
  PropertyText,
  Footer,
  PriceWrapper,
  RentPriceText,
  ActionsWrapper,
  TotalPriceText,
  ActionButton,
  ActionIcon,
} from "./PropertyStyled";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import RulerIcon from "../../assets/icons/ruler.svg";
import BedIcon from "../../assets/icons/bed.svg";
import LikeIcon from "../../assets/icons/like.svg";
import TrashIcon from "../../assets/icons/trash.svg";

interface PropertyProps {
  title: string;
  photos?: Array<{ name: string }>;
  type?: string;
  location?: string;
  square?: number;
  bed?: number;
  rentPrice?: string;
  totalPrice?: string;
}

const Property: FC<PropertyProps> = ({
  title,
  photos,
  type,
  location,
  square,
  bed,
  rentPrice,
  totalPrice,
}) => {
  return (
    <Wrapper>
      <Inner>
        <Slide indicators autoplay={false}>
          {photos?.map((a) => (
            <SlideWrapper className="each-slide">
              <SlideImage src={`/images/${a.name}`} />
            </SlideWrapper>
          ))}
        </Slide>
        <ContentWrapper>
          <PropertyType>{type}</PropertyType>
          <PropertyTitle>{title}</PropertyTitle>
          <PropertyLocation>{location}</PropertyLocation>
          <Properties>
            <PropertyWrapper>
              <PropertyIcon src={RulerIcon} />
              <PropertyText>{square} m²</PropertyText>
            </PropertyWrapper>
            <PropertyWrapper>
              <PropertyIcon src={BedIcon} />
              <PropertyText>{bed} querto</PropertyText>
            </PropertyWrapper>
          </Properties>
          <Footer>
            <PriceWrapper>
              <RentPriceText>Aluguel R$ {rentPrice}</RentPriceText>
              <TotalPriceText>Total R$ {totalPrice}</TotalPriceText>
            </PriceWrapper>
            <ActionsWrapper>
              <ActionButton>
                <ActionIcon src={LikeIcon} />
              </ActionButton>
              <ActionButton>
                <ActionIcon src={TrashIcon} />
              </ActionButton>
            </ActionsWrapper>
          </Footer>
        </ContentWrapper>
      </Inner>
      <CustomStyle />
    </Wrapper>
  );
};

export default Property;
