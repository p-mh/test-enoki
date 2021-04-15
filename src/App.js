import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Assets from './components/Assets'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/assets">Assets</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/assets" component={Assets} />
      </BrowserRouter>
    </div >
  );
}

export default App;
