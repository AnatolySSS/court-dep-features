import { ProgressBar } from "primereact/progressbar";

type Props = {
  assigned: number;
  completed: number;
};

export function ProgressCell({ assigned, completed }: Props) {
  if (!assigned) return null;

  const percent = Math.round((completed / assigned) * 100);

  return (
    <div className="flex gap-2 align-items-center">
      <ProgressBar value={percent} showValue={false} style={{ width: 120 }} />
      <span>{percent}%</span>
    </div>
  );
}
