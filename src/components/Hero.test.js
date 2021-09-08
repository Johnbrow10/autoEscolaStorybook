import React from "react";
import { render } from "@testing-library/react";

import Hero from "./Hero";
test("render Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Johnatan Santos</p>
    </Hero>
  );

  expect(getByText("Johnatan Santos")).toBeInTheDocument();
});

test("render image background", () => {
  const image = "http://test/image.jpg";

  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("Hero")).toHaveStyleRule({
    background: image,
  });
});
