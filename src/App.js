import { Provider } from 'react-redux';
import './App.css';
import Home from './Components/Home';
import appStore from './utils/appStore';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <ToastContainer/>
        <Home/>
      </div>
    </Provider>
  );
}

export default App;
