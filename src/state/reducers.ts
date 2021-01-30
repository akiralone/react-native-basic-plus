const reducers = (preState: StateProps, actions: ActionProps) => {
    switch (actions.type) {
        case 'SET_THEME':
            return {
                ...preState,
                theme: actions.value
            }
        default:
            return preState
    }
}

export default reducers