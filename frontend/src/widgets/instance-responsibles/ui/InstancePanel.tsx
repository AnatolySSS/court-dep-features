import { TabView, TabPanel } from "primereact/tabview";
import { InstanceSection } from "./InstanceSection";
import type { Responsible } from "@/entities/responsible/model/types";

type Props = {
  typeResponsibles: Responsible[];
  objectionResponsibles: Responsible[];
};

export function InstancePanel({ typeResponsibles, objectionResponsibles }: Props) {
  return (
    <TabView>
      <TabPanel header="Типизация исков">
        <InstanceSection title="Типизация исков" data={typeResponsibles} />
      </TabPanel>
      <TabPanel header="Отзывы / возражения">
        <InstanceSection title="Отзывы / возражения" data={objectionResponsibles} />
      </TabPanel>
    </TabView>
  );
}
