import { Calendar } from "primereact/calendar";
import type { Nullable } from "primereact/ts-helpers";
import { selectUploadDateRange, setDateRange } from "@/05-entities";
import { useDispatch, useSelector } from "react-redux";

export const CalendarComponent = () => {
  const dispatch = useDispatch();
  const dateRange = useSelector(selectUploadDateRange);

  const onChange = (e: { value: Nullable<(Date | null)[]> }) => {
    const [startDate, endDate] = e.value ?? [];

    dispatch(setDateRange([startDate ?? null, endDate ?? null]));
  };

  return (
    <div className="card flex justify-content-center">
      <Calendar
        value={dateRange}
        onChange={onChange}
        selectionMode="range"
        dateFormat="dd.mm.yy"
        readOnlyInput
        hideOnRangeSelection
        showIcon
      />
    </div>
  );
};
