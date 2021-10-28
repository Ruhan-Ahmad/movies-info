import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { SearchMovie } from './MyComponent/SearchMovie';
function App() {
  return (
    <div className="container">
      <h3 className="title">React-Movie-Search-App</h3>
        <SearchMovie />
    </div>
  );
}

export default App;
