import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//  enum para cores do botao
const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

// Enum para estilos do botão
const ButtonsVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

// Um selector com as opções de cores principais
const getMainColor = ({ theme, colors }) => {
  switch (colors) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default:
      return "#e0e0e0";
  }
};

// obtem a cor atraves da propriedade color para texto
const getColorText = (props) => props.theme.colors.primary.text;

const getOutlinedText = (props) => {
  if (props.colors === ButtonColors.default) {
    return "#212121";
  }
  return getMainColor(props);
};

const getLinkText = (props) => {
  if (props.colors === ButtonColors.default) {
    return "#757575";
  }
  return getMainColor(props);
};

// estilo de cor mais escura para o botao quanado tiver a acao hover
const getDarkColor = ({ theme, colors }) => {
  switch (colors) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.danger.dark;
    default:
      return "#5a6268";
  }
};

// estilação do botao
const Button = styled.button`
  font-size: 1rem;
  font-weight: 12px 36px;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};

  /* estilo para o botao desativado */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getDarkColor};
    border-radius: ${getDarkColor};
  }
`;

const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedText};

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

// onde retorna como o botao irá aparecer na doc
const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonsVariants.link:
      return <ButtonLink {...props} />;
    default:
      return <Button {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonsVariants)),
};

export default ButtonWrapper;
