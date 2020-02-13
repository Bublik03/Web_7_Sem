import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux'
import {Page} from "./components/Page";
import store from './store/store'

function App() {
  return (
      <Provider store={store}>
        <Page/>
      </Provider>
  );
}

export default App;
