import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { breajAt, BreakpointSizes } from "styles/Breakpoints";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0px;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: bottom;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    &::before {
      content: "\\2713\\0020";
      color: ${colorYellow};
    }
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breajAt(BreakpointSizes.sm)} {
    padding: 0 16px;
  }
  ${breajAt(BreakpointSizes.lg)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Hero = ({ image, children }) => (
  <Root image={image} data-testid="Hero">
    <div>
      <Container>
        <Content>{children}</Content>
      </Container>
    </div>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
