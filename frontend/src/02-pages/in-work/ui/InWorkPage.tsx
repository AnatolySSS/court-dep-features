import { useSelector } from "react-redux";
import type { RootState } from "@/01-app";
import { InstanceTabs } from "@/03-widgets";
import styles from "./in-work-page.module.css";

export function InWorkPage() {
  const instances = useSelector((state: RootState) => state.upload.modifiedData);

  return (
    <div className={styles.wrapper}>
      <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
          <h1>Осталось в работе</h1>
        </div>
        <div className={styles.result}>
          <InstanceTabs
            data={{
              first: instances?.firstInstance,
              appeal: instances?.appealInstance,
              cass: instances?.cassInstance,
              cass2: instances?.cass2Instance,
              allInstances: instances?.allInstances,
            }}
          />
        </div>
      </>
    </div>
  );
}
