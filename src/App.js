import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
