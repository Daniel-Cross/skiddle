import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "../components/SearchBar";
import testSetup from "../testSetup";
import { shallow } from "enzyme";

describe("SearchBar", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <SearchBar
        value="mock value"
        type="mock text"
        handleChange={() => null}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render an input field with the correct proptypes", () => {
    const testInput = shallow(
      <SearchBar
        value="mock value"
        type="mock text"
        handleChange={() => null}
      />
    );
    expect(testInput.find("input").prop("value")).toBe("mock value");
    expect(testInput.find("input").prop("type")).toBe("mock text");
  });
});
