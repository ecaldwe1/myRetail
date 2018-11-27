import React from "react";
import ProductPrice from "./ProductPrice";
import { shallow } from "enzyme";
it("renders without crashing", () => {
  shallow(<ProductPrice />);
});
