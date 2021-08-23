const checkAsync = ({ dispatch }) => next => action => {
    // check to se if action
    // has a promise on its 'payload' prop
    // If it does, then wait for it to resolve
    // If it doesn't, then send the action on to the next middleware
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // We want to wait for the promise to resolve
    // and then create a new action
    // with the data and dispatch it
    action.payload.then((response) => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });

}

export default checkAsync;