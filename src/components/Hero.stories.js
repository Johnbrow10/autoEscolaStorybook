import React from "react";
import { text } from "@storybook/addon-knobs";
import Hero from "./Hero";
import BgCuba from "../stories/assets/cuba-16.jpg";
import BgEstrada from "../stories/assets/estrada.jpg";
import Heading from "./Heading";
export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgCuba}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir ")}</h1>
    <p>{text("Text", "A auto escola lider em aprovação")}</p>
  </Hero>
);

export const WhistList = () => (
  <Hero image={BgEstrada}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br /> para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
    </ul>
  </Hero>
);
