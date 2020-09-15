/* eslint-disable import/prefer-default-export */
import { Actions, User, ActionSetUser } from '../../types';

const setUserAction = (payload: User | null): ActionSetUser => ({ type: Actions.setUser, payload })

export {
    setUserAction
}   
