import './App.css';
import Home from './pages/home';
import Signin from './pages/signin';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Signin} />
      <Route path="/home" exact component={Home} />
    </Router>
  );
}

export default App;
