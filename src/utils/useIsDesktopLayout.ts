import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useIsDesktopLayout = (): boolean => {
  const theme = useTheme();
  const isDesktopLayout = useMediaQuery(theme.breakpoints.up("sm"));

  return isDesktopLayout;
};

export default useIsDesktopLayout;
