import React, { useMemo } from "react";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";
import useWindowDimensions from "../../assets/hooks/useWindowDimensions";
import { minWidthForPlatform } from "../../shared/data/windowSizes";

const NavBar: React.FC = () => {
  const { width } = useWindowDimensions();

  const isView = useMemo(() => {
    return width < Number(minWidthForPlatform.desktop.slice(0, -2));
  }, [width]);

  return <>{isView ? <Mobile /> : <Desktop />}</>;
};

export default NavBar;
