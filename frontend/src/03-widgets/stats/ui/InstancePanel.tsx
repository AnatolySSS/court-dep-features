import { TabView, TabPanel } from "primereact/tabview";
import { InstanceSection } from "./InstanceSection";
import type { Responsible } from "@/05-entities";

type Props = {
  typeResponsibles: Responsible[];
  objectionResponsibles: Responsible[];
  approveResponsibles: Responsible[];
  allTypeResponsibles: Responsible[];
};

export function InstancePanel({
  typeResponsibles,
  objectionResponsibles,
  approveResponsibles,
  allTypeResponsibles,
}: Props) {
  return (
    <TabView>
      <TabPanel header="Типизация исков">
        <InstanceSection title="Типизация исков" data={typeResponsibles} />
      </TabPanel>
      <TabPanel header="Отзывы / возражения">
        <InstanceSection title="Отзывы / возражения" data={objectionResponsibles} />
      </TabPanel>
      <TabPanel header="Согласование возражений">
        <InstanceSection title="Согласование возражений" data={approveResponsibles} />
      </TabPanel>
      <TabPanel header="Всего">
        <InstanceSection title="Всего" data={allTypeResponsibles} />
      </TabPanel>
    </TabView>
  );
}
