import { createContext } from "react";

const initState: StateProps = {
    theme: 'light',
    dispatch: function(action: ActionProps): void{}
}

const ThemeStateContext = createContext(initState);

export default ThemeStateContext;