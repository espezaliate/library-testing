import React from "react";
import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import ShipmentPickupForm from "../screens/ShipmentPickupForm/ShipmentPickupForm";
import App from "../App";

test("checks if form passes without all required fields", () => {
  render(<ShipmentPickupForm />);
  console.log(screen.queryByText("Submit"));
  const submitButton = shallow(
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  );
  // submitButton.simulate('click')
  expect(submitButton).toBeInTheDocument();
});
