import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
        // eslint-disable-next-line
        (window.devToolsExtension) ? window.devToolsExtension() : f = f
    )
);