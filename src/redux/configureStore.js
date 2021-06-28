import {createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';

import { Dishes } from "./dishes";

export const configureStore = () =>{
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            comments : Comments,
            leaders : Leaders,
            promotions : Promotions,
            ...createForms({
                feedback : InitialFeedback
            })
        }),
        // applyMiddleware(thunk , logger)
        applyMiddleware(thunk)
    )
    return store;
}