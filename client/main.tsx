import * as Nerv from '../packages/nerv/src';
import { Store, createStore } from 'redux';
import { Provider } from '../packages/nerv-redux/src';

import App from './main/components/App';
import rootReducer from './main/reducer';

const initialState = {};
const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store: Store<any> = enhancer(rootReducer, initialState);

// class HelloWord extends Nerv.Component<{name?:string;},void> {
//   render(){
//     return <div>{this.props.name}</div>
//   }
// }

Nerv.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);