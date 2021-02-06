import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { GithubState } from './Context/GithubContext';
import Hero from './Components/Hero';

function App() {
  return (
    <GithubState>
      <Router>
        <Hero />
      </Router>
    </GithubState>
  );
}

export default App;
