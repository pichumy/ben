import './App.css';
import { Route , Switch } from 'react-router-dom';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ImageGallery} />
      </Switch>
    </div>
  );
}

export default App;
