
import { configureStore, getDefaultMiddleware,combineReducers } from '@reduxjs/toolkit';
import authReducer from "./auth";

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middleware = [...getDefaultMiddleware({
    serializableCheck: false
}
)];


const rootReducer = combineReducers({
    auth: authReducer,
 

})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'], //Things u want to persist
  };
  
  // Middleware: Redux Persist Persisted Reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);


const store =  configureStore({
    reducer: persistedReducer,
    middleware
});

let persistor = persistStore(store);

export type RootState = ReturnType<typeof persistedReducer>
export type AppDispatch = typeof store.dispatch

export default store;
export {
    persistor,
};
