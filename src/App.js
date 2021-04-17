import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import Assets from './components/Assets'
import AddAsset from './components/AddAsset'

const StyledApp = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #1C1C1E;
  color: #ffffff;
  min-height: 100vh;
`

function App() {
  return (
    <StyledApp className="App">
      <div>Menu</div>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" activeClassName="current" component={Dashboard} />
        <Route path="/assets" activeClassName="current" component={Assets} />
        <Route path="/assets/add" activeClassName="current" component={AddAsset} />
      </BrowserRouter>
    </StyledApp >
  );
}

export default App;
