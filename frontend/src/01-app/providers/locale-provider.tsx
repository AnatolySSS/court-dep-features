import { useEffect } from "react";
import { locale } from "primereact/api";
import { creactLocale } from "./addLocale.ts";

export const LocaleProvider = () => {
  useEffect(() => {
    creactLocale();
    locale("ru");
  }, []);

  return null;
};
