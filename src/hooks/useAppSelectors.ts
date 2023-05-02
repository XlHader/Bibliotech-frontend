import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useAuthSelector = () => useSelector((state: RootState) => state.auth)