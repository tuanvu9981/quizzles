import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { initialState } from './reducer';
import rootSaga from './saga';

import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

function configureStore(preloadedState = initialState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        bindMiddleware([sagaMiddleware]),
    );

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };

    store.runSagaTask();
    return store;
}

// const persisConfig = {
//     key: 'root',
//     storage: sessionStorage,
//     whitelist: ['course', 'chapter'],
//     stateReconciler: autoMergeLevel2
// }

// const pReducer = persistReducer(persisConfig, rootReducer);
// const pStore = createStore(pReducer);
// export const persistor = persistStore(pStore);

export default configureStore;


