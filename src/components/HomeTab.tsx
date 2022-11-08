import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, matchPath, useLocation } from "react-router-dom";

const HomeTab = () => {
  const useRouteMatch = (patterns: readonly string[]) => {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return null;
  };

  const routeMatch = useRouteMatch(["/", "/popular"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab} sx={{ marginBottom: "20px" }}>
      <Tab label="Newest" value="/" to="/" component={Link} />
      <Tab label="Popular" value="/popular" to="/popular" component={Link} />
    </Tabs>
  );
};

export default HomeTab;
