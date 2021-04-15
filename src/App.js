import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import Assets from './components/Assets'

const StyledApp = styled.div`
  font-family: 'Poppins', sans-serif;
`

function App() {
  return (
    <StyledApp className="App">
      <BrowserRouter>
        <NavBar/>
        <Route exact path="/" activeClassName="current" component={Dashboard} />
        <Route path="/assets" activeClassName="current" component={Assets} />
      </BrowserRouter>
    </StyledApp >
  );
}

export default App;
