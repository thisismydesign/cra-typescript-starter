import React from "react";
import {
  render,
  screen,
  MobileThemeWrapper,
  DesktopThemeWrapper,
} from "test-utils";
import HideOnMobile from "./HideOnMobile";

describe("HideOnMobile", () => {
  describe("when screensize is desktop", () => {
    it("shows children", () => {
      const testMessage = "Test Message";
      render(<HideOnMobile>{testMessage}</HideOnMobile>, {
        wrapper: DesktopThemeWrapper,
      });

      expect(screen.getByText(testMessage)).toBeInTheDocument();
    });
  });

  describe("when screensize is mobile", () => {
    it("hides children", () => {
      const testMessage = "Test Message";
      render(<HideOnMobile>{testMessage}</HideOnMobile>, {
        wrapper: MobileThemeWrapper,
      });

      expect(screen.queryByText(testMessage)).toBeNull();
    });
  });
});
