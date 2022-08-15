import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import localLog from "utils/localLog";

export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    localLog("Tracking page view", location.pathname + location.search);

    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search + location.hash,
      page_search: location.search,
      page_hash: location.hash,
    });
  }, [location]);
};
