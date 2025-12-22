import { useSelector } from "react-redux";
import type { RootState } from "./index";

export const useAppSelector = <T>(fn: (state: RootState) => T) => useSelector(fn);
