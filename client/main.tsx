import { Store, createStore } from 'redux';
import App from './main/components/App';
import rootReducer from './main/reducer';
import { Provider } from 'nerv-redux';
import * as  Nerv from '../packages/nerv/src';

const initialState = {};
const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store: Store<any> = enhancer(rootReducer, initialState);


Nerv.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);