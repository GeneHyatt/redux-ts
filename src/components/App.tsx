import React from 'react';
import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from './RepositoriesList';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
            <h1>Search for a package</h1>
            <RepositoriesList />
        </Provider>
      </header>
    </div>
  );
}

export default App;
