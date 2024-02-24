import "../../assets/scss/components/NavBar.scss";
import React, { useState, useEffect } from "react";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";
import useWindowDimensions from "../../assets/hooks/useWindowDimensions";
import { minWidthForPlatform } from "../../shared/data/windowSizes";

const NavBar: React.FC = () => {
  const { width } = useWindowDimensions();
  const [isView, setIsView] = useState<boolean>();

  useEffect(() => {
    setIsView((prevIsView) =>
      width < Number(minWidthForPlatform.desktop.slice(0, -2))
        ? true
        : prevIsView
    );
  }, [width, setIsView]);

  return <>{isView ? <Mobile /> : <Desktop />}</>;
};

export default NavBar;
