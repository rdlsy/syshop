import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../modules';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(
    enhancedReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk)));
  const persistor = persistStore(store);
  return { store, persistor }
}
