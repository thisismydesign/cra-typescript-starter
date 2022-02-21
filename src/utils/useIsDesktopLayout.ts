import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useIsDesktopLayout = (): boolean => {
  const theme = useTheme();
  const isDesktopLayout = useMediaQuery(theme.breakpoints.up("sm"));

  return isDesktopLayout;
};

export default useIsDesktopLayout;
