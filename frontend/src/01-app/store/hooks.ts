import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/01-app";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
