import i18next from "i18next";
import pjson from "../../package.json";

export const mailto: string =
  "mailto:" +
  pjson.author.email +
  "?subject=" +
  i18next.t("mail.subject") +
  "&body=" +
  i18next.t("mail.body");
