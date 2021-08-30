import React, { FC } from "react";
import IconButton from "../buttons/icon-button/IconButton";
import {
  ActionsWrapper,
  BreadCrumb,
  BreadCrumbIcon,
  BreadCrumbWrapper,
  HeaderContent,
  HeaderWrapper,
  SearchDescription,
  SearchLocation,
  Wrapper,
} from "./ListingHeaderStyled";

import SettingsIcon from "../../assets/icons/settings.svg";
import Dog from "../../assets/icons/dog.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";

interface ListingHeaderProps {
  breadcrumbs: Array<{
    name: string;
    url: string;
  }>;
}

const ListingHeader: FC<ListingHeaderProps> = ({ breadcrumbs }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderContent>
          <SearchDescription>Imoveis para alugar em</SearchDescription>
          <SearchLocation>Sao Paulo, SP</SearchLocation>
        </HeaderContent>

        <ActionsWrapper>
          <IconButton title="Filtrar" icon={SettingsIcon} />
          <IconButton title="Farejar imovel" icon={Dog} />
        </ActionsWrapper>
      </HeaderWrapper>
      <BreadCrumbWrapper>
        {breadcrumbs.map((breadcrumb) => (
          <BreadCrumb href={breadcrumb.url}>
            {breadcrumb.name} <BreadCrumbIcon src={RightArrow} />{" "}
          </BreadCrumb>
        ))}
      </BreadCrumbWrapper>
    </Wrapper>
  );
};

export default ListingHeader;
