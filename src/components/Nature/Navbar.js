import React, { useCallback, useState } from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useLocation } from "@reach/router";
import NavButton from "./shared/buttons/NavButton";
import NavSmallButton from "./shared/buttons/NavSmallButton";
import MoreIcon from "images/nature/icons/more.svg";
import CancelIcon from "images/nature/icons/cancel.svg";
import CaseofStudyIcon from "images/nature/icons/blog/caseofstudy.svg";
import CareerIcon from "images/nature/icons/blog/career.svg";
import ContactIcon from "images/nature/icons/blog/contact.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import colors from "./colors";
import _JSXStyle from "styled-jsx/style";
import uuid from "uuid/v4";
if (typeof global !== "undefined") {
  Object.assign(global, { _JSXStyle });
}
const NatureNavBar = () => {
  const [actionStatus, setActionStatus] = useState(false);
  const { pathname } = useLocation();

  const { languages, language, changeLanguage } = useI18next();

  const handleToggle = useCallback(() => {
    setActionStatus((s) => !s);
  }, []);

  const paths = [
    {
      to: `/nature/case-studies`,
      title: "CASE STUDIES",
      color: colors[2],
      icon: CaseofStudyIcon,
    },
    {
      to: "/nature/careers",
      title: "CAREERS",
      color: colors[0],
      icon: CareerIcon,
    },
    {
      to: "/nature/contact",
      title: "CONTACT",
      color: colors[3],
      icon: ContactIcon,
    },
  ];
  const [currentLang, setCurrentLang] = useState(language);
  const onChangeLanguage = (e) => {
    setCurrentLang(e.target.value);
    changeLanguage(e.target.value);
  };

  return (
    <nav className={`nav ${actionStatus ? "nav-open" : ""}`}>
      <AniLink
        to="/nature"
        duration={0.7}
        paintDrip
        hex={colors[0]}
        className="nav-link nav-link-enable"
      >
        <div className="logo-container">
          <span className="logo">WA</span>
        </div>
      </AniLink>
      <ul className="navbar">
        {paths.map(({ to, title, color }) => (
          <li key={uuid()}>
            <NavButton
              to={language === "en" ? to : `/${language}${to}`}
              title={title}
              color={color}
              selected={
                language === "en"
                  ? pathname === to
                  : pathname === `/${language}${to}`
              }
            />
          </li>
        ))}
        <li className="action" onClick={handleToggle}>
          {actionStatus ? <CancelIcon /> : <MoreIcon />}
        </li>
        <li>
          <div>
            <select
              className="lang-options"
              value={currentLang}
              onChange={onChangeLanguage}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </li>
      </ul>
      <div className={`${actionStatus ? "nav-menu-visible" : "nav-menu-none"}`}>
        <ul className="nav-menu">
          {paths.map((path) => (
            <NavSmallButton
              key={uuid()}
              to={path.to}
              color={path.color}
              title={path.title}
              icon={path.icon}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NatureNavBar;
