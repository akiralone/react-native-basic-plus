import { createContext } from "react";
import { StateProps, ActionProps } from "../types";

const initState: StateProps = {
    theme: 'light',
    dispatch: function(action: ActionProps): void{}
}

const ThemeStateContext = createContext(initState);

export default ThemeStateContext;