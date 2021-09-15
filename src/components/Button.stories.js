import React from "react";
import { actions } from "@storybook/addon-actions";
import styled from "styled-components";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <p>
      Enabled:
      <Toolbar>
        <Button {...events}>Default</Button>
        <Button colors="primary" {...events}>
          Primary
        </Button>
        <Button colors="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </p>
    <p>
      Disabled:
      <Toolbar>
        <Button disabled {...events}>
          Default
        </Button>
        <Button disabled colors="primary" {...events}>
          Primary
        </Button>
        <Button disabled colors="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </p>
  </div>
);

export const outlined = () => (
  <div>
    <p>
      Enabled:
      <Toolbar>
        <Button variant="outlined" {...events}>
          Default
        </Button>
        <Button variant="outlined" colors="primary" {...events}>
          Primary
        </Button>
        <Button variant="outlined" colors="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </p>
    <p>
      Disabled:
      <Toolbar>
        <Button variant="outlined" disabled {...events}>
          Default
        </Button>
        <Button variant="outlined" disabled colors="primary" {...events}>
          Primary
        </Button>
        <Button variant="outlined" disabled colors="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </p>
  </div>
);

export const link = () => (
  <div>
    <p>
      Enabled:
      <Toolbar>
        <Button variant="link" {...events}>
          Default
        </Button>
        <Button variant="link" colors="primary" {...events}>
          Primary
        </Button>
        <Button variant="link" colors="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </p>
    <p>
      Disabled:
      <Toolbar>
        <Button variant="link" disabled {...events}>
          Default
        </Button>
        <Button variant="link" disabled colors="primary" {...events}>
          Primary
        </Button>
        <Button variant="link" disabled colors="danger" {...events}>
          Danger
        </Button>
      </Toolbar>
    </p>
  </div>
);
