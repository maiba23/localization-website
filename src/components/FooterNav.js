import React from "react";
import { useLocation } from "@reach/router";

import colors from "./Nature/colors";
import NavButton from "./Nature/shared/buttons/NavButton";

export const FooterNav = () => {
  const { pathname } = useLocation();
  const paths = [
    { to: "/nature/case-studies", title: "CASE STUDIES", color: colors[2] },
    { to: "/nature/careers", title: "CAREERS", color: colors[0] },
    { to: "/nature/contact", title: "CONTACT", color: colors[3] },
  ];

  return (
    <div className="footer-nav">
      {paths.map(({ to, title, color }, _i) => (
        <NavButton
          key={_i}
          to={to}
          title={title}
          color={color}
          selected={pathname === to}
        />
      ))}
    </div>
  );
};
