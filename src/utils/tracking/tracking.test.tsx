import React from "react";
import { fireEvent, render } from "test-utils";
import ReactGA from "react-ga";
import { screen } from "@testing-library/react";

import Example from "./tracking.example";
import { trackEvent } from "./tracking";

jest.mock("react-ga");

afterEach(() => {
  jest.clearAllMocks();
});

const url = "https://www.vanity.services";
const ciUrl = "https://www.vanity.services?env=CI";

describe("usePageTracking", () => {
  describe(`when URL is ${url}`, () => {
    let location: Location;
    const mockLocation = new URL(url) as unknown as Location;

    beforeEach(() => {
      location = window.location;
      mockLocation.replace = jest.fn();
      // @ts-expect-error dirty fix
      delete window.location;
      window.location = mockLocation;
    });

    afterEach(() => {
      window.location = location;
    });

    it("initializes analytics", () => {
      render(<Example />);
      expect(ReactGA.initialize).toHaveBeenCalled();
    });

    it("tracks page view", () => {
      render(<Example />);
      expect(ReactGA.pageview).toHaveBeenCalledWith("/");
    });

    it("tracks page change", () => {
      render(<Example />);
      fireEvent.click(screen.getByText("Page"));
      expect(ReactGA.pageview).toHaveBeenCalledWith("/page");
    });
  });

  describe("when URL is localhost", () => {
    it("does not initialize ReactGA", () => {
      render(<Example />);
      expect(ReactGA.initialize).not.toHaveBeenCalled();
    });

    it("doesn't track page view", () => {
      render(<Example />);
      expect(ReactGA.pageview).not.toHaveBeenCalled();
    });
  });

  describe("when URL has CI env params", () => {
    let location: Location;
    const mockLocation = new URL(ciUrl) as unknown as Location;

    beforeEach(() => {
      location = window.location;
      mockLocation.replace = jest.fn();
      // @ts-expect-error dirty fix
      delete window.location;
      window.location = mockLocation;
    });

    afterEach(() => {
      window.location = location;
    });

    it("does not initialize ReactGA", () => {
      render(<Example />);
      expect(ReactGA.initialize).not.toHaveBeenCalled();
    });

    it("doesn't track page view", () => {
      render(<Example />);
      expect(ReactGA.pageview).not.toHaveBeenCalled();
    });
  });
});

describe("trackEvent", () => {
  const eventPayload = {
    category: "category",
    action: "action",
    label: "label",
  };

  describe(`when URL is ${url}`, () => {
    let location: Location;
    const mockLocation = new URL(url) as unknown as Location;

    beforeEach(() => {
      location = window.location;
      mockLocation.replace = jest.fn();
      // @ts-expect-error dirty fix
      delete window.location;
      window.location = mockLocation;
    });

    afterEach(() => {
      window.location = location;
    });

    it("tracks event", () => {
      trackEvent(eventPayload);

      expect(ReactGA.event).toHaveBeenCalledWith(eventPayload);
    });
  });

  describe("when URL is localhost", () => {
    it("doesn't track event", () => {
      trackEvent(eventPayload);

      expect(ReactGA.event).not.toHaveBeenCalled();
    });
  });

  describe("when URL has CI env params", () => {
    let location: Location;
    const mockLocation = new URL(ciUrl) as unknown as Location;

    beforeEach(() => {
      location = window.location;
      mockLocation.replace = jest.fn();
      // @ts-expect-error dirty fix
      delete window.location;
      window.location = mockLocation;
    });

    afterEach(() => {
      window.location = location;
    });

    it("doesn't track event", () => {
      trackEvent(eventPayload);

      expect(ReactGA.event).not.toHaveBeenCalled();
    });
  });
});
