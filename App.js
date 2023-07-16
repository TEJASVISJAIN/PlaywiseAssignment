import { LogBox } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducer';
import thunk from 'redux-thunk';
import Base from './src/screens/Base/Base'

const App = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
        <Base />  
    </Provider>
  );
};

export default App;
