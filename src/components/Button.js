import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  font-weight: 12px 36px;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colorYellow};
  border: 2px solid #ffc107;
  color: #212121;
`;

Button.defaultProps = {
  type: "button",
  children: undefined,
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
