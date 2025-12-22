import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import type { JSX } from "react/jsx-dev-runtime";

export const ErrorPage = (): JSX.Element => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-column align-items-center justify-content-center h-screen">
      <span className={styles.errorStatus}>{error.status}</span>
      <p>
        <b>{error.statusText}:</b> <i className={styles.underline}>{error.message}</i>
      </p>
    </div>
  );
};
