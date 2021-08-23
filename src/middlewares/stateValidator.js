import tv4 from "tv4";
import stateSchema from './stateSchema';

const stateValidator = ({dispatch, getState}) => next => action => {
    next(action);

    console.log(tv4.validate(getState(), stateSchema));
}

export default stateValidator;