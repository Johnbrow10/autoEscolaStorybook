import React from "react";
// Sempre lembrar de importar  do teste utils inves do @testing-library/react
import { render } from "test-utils";

import Button from "./Button";

test("renders a text", () => {
  const { getByText } = render(<Button>click here</Button>);

  expect(getByText("click here")).toBeInTheDocument();
});
