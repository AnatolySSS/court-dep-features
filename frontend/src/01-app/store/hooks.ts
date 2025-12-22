import { useSelector } from "react-redux";
import type { RootState } from "@/01-app";

export const useAppSelector = <T>(fn: (state: RootState) => T) => useSelector(fn);
