import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from './MyComponent/Header';
import { SearchMovie } from './MyComponent/SearchMovie';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Header/>
    <div className="container">
      <h3>React-Movie-Search-App</h3>
        <SearchMovie />
    </div>
    </Router>
  );
}

export default App;
