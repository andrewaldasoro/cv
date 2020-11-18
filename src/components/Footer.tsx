import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import Emoji from "./Emoji";
import ReactLogo from "./ReactLogo";
import githubLogo from "../assets/logo-github.svg";
import linkedinLogo from "../assets/logo-linkedin.svg";
import trelloLogo from "../assets/logo-trello.svg";
import pjson from "../../package.json";
import { mailto } from "../services/shared";
import { Button } from "react-bootstrap";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <footer id="bottom" className="Footer" data-testid="Footer">
        <ReactLogo />
        <address>
          Email: <a href={mailto}>{pjson.author.email}</a>
          <div className="social-networks">
            <a
              href="https://github.com/andrewaldasoro/cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub" title="GitHub" />
            </a>
            <a
              href="https://linkedin.com/in/andrewaldasoro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" title="LinkedIn" />
            </a>
            <a
              href="https://trello.com/b/2lJcsfa0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={trelloLogo} alt="Trello" title="Trello" />
            </a>
          </div>
        </address>
        <div className="language">
          <Button type="button" onClick={() => changeLanguage("es")}>
            {new Emoji("ES 🌮", t("spanish")).render()}
          </Button>
          <Button type="button" onClick={() => changeLanguage("en")}>
            {new Emoji("EN 🍁", t("english")).render()}
          </Button>
        </div>
        <div className="version">Version: {pjson.version}</div>
      </footer>
    </>
  );
};

export default Footer;
