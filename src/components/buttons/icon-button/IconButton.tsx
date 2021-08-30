import React, { FC } from "react";
import { ButtonIcon, ButtonText, ButtonWrapper } from "./IconButtonStyled";

interface IconButtonProps {
  title: string;
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton: FC<IconButtonProps> = ({ title, icon, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick && onClick}>
      {icon && <ButtonIcon src={icon} />}

      <ButtonText>{title}</ButtonText>
    </ButtonWrapper>
  );
};

export default IconButton;
