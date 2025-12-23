import { TabView, TabPanel } from "primereact/tabview";
import { InstancePanel } from "./InstancePanel";

type Props = {
  data: {
    first: any;
    appeal: any;
    cass: any;
    cass2: any;
    allInstances: any;
  };
};

export function InstanceTabs({ data }: Props) {
  return (
    <TabView>
      <TabPanel header="Первая инстанция">
        <InstancePanel {...data.first} />
      </TabPanel>

      <TabPanel header="Апелляция">
        <InstancePanel {...data.appeal} />
      </TabPanel>

      <TabPanel header="Кассация">
        <InstancePanel {...data.cass} />
      </TabPanel>

      <TabPanel header="Кассация 2">
        <InstancePanel {...data.cass2} />
      </TabPanel>

      <TabPanel header="Все инстанции">
        <InstancePanel {...data.allInstances} />
      </TabPanel>
    </TabView>
  );
}
