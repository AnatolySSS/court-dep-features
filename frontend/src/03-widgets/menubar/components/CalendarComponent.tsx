import { Calendar } from "primereact/calendar";
import type { Nullable } from "primereact/ts-helpers";
import { selectUploadDateRange, setDateRange } from "@/04-features";
import { Button } from "primereact/button";
import { useAppDispatch, useAppSelector } from "@/01-app/store/hooks";

export const CalendarComponent = () => {
  const dispatch = useAppDispatch();
  const dateRange = useAppSelector(selectUploadDateRange);

  const onChange = (e: { value: Nullable<(Date | null)[]> }) => {
    const [startDate, endDate] = e.value ?? [];
    dispatch(setDateRange([startDate ?? null, endDate ?? null]));
  };

  const onClear = () => {
    dispatch(setDateRange(null));
  };

  return (
    <div className="card flex justify-content-center">
      <div className="p-inputgroup flex-1">
        <Button icon="pi pi-times" className="p-button-primary" onClick={onClear} />
        <Calendar
          placeholder="Диапазон дат"
          value={dateRange}
          onChange={onChange}
          selectionMode="range"
          dateFormat="dd.mm.yy"
          readOnlyInput
          hideOnRangeSelection
          showIcon
        />
        <div></div>
      </div>
    </div>
  );
};
