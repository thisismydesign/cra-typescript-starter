import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

import localLog from "utils/localLog";

type Event = { category: string; action: string; label?: string };

const localEnv = (): boolean => {
  return window.location.href.includes("localhost");
};

const ciEnv = (): boolean => {
  return window.location.href.includes("env=CI");
};

export const usePageTracking = (): void => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!(localEnv() || ciEnv())) {
      ReactGA.initialize("UA-xxxxxxxxx-x");
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    localLog("Tracking page view", location.pathname + location.search);

    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export const trackEvent = (event: Event): void => {
  localLog("Tracking event", event);

  if (!(localEnv() || ciEnv())) {
    ReactGA.event(event);
  }
};
