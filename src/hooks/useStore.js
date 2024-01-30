import { useContext } from "react";
import { StoreContext } from "..";

export const useStore = () => {
    return useContext(StoreContext)
};