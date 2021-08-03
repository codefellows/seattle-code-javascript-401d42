import './App.css';

import {Provider} from 'react-redux';
import store from './store/index.js';

import CategoryList from './components/CategoryList.js';
import ActiveCategory from './components/ActiveCategory';
import Votes from './components/Votes.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CategoryList />
        <ActiveCategory />
        <Votes />
      </div>
    </Provider>
  );
}

export default App;
