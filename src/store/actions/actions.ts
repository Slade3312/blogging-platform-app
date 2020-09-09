/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux'
import { Actions } from '../../types';
import { getArticles } from '../../services/serviceAPI'



const getArticlesAction = () => {
    return (dispatch: Dispatch): void => {
        getArticles().then((value) => {
            dispatch({
                type: Actions.getArticles,
                payload: value
            })
        })
    }
}



export {
    getArticlesAction
} 
