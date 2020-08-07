import React from "react";
import {
  render,
  screen,
  MobileThemeWrapper,
  DesktopThemeWrapper,
} from "test-utils";
import ShowOnMobile from "./ShowOnMobile";

describe("ShowOnMobile", () => {
  describe("when screensize is mobile", () => {
    it("shows children", () => {
      const testMessage = "Test Message";
      render(<ShowOnMobile>{testMessage}</ShowOnMobile>, {
        wrapper: MobileThemeWrapper,
      });

      expect(screen.getByText(testMessage)).toBeInTheDocument();
    });
  });

  describe("when screensize is desktop", () => {
    it("hides children", () => {
      const testMessage = "Test Message";
      render(<ShowOnMobile>{testMessage}</ShowOnMobile>, {
        wrapper: DesktopThemeWrapper,
      });

      expect(screen.queryByText(testMessage)).toBeNull();
    });
  });
});
