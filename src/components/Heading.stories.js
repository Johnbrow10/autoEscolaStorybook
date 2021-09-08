import React from "react";
import { text } from "@storybook/addon-knobs";

import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
};

export const usage = () => (
  <Heading>
    <h1>{text("Title ", "Título 1")}</h1>
  </Heading>
);
