// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'; // React18버전부터 해당 import 를 사용함
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './modules';

// 스토어 생성하기
const store = createStore(rootReducer, composeWithDevTools());

/*React18버전부터 createRoot 를 사용함*/
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(
  /* Provider 컴포넌트를 사용하여 스토어를 사용할 수 있도록 함.
   * 해당 컴포넌트 사용시에는 store를 props로 전달해야 한다. */
  <Provider store={store}>
    <App />
  </Provider>
);