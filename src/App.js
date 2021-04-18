import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Menu'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import Assets from './components/Assets'
import AddAsset from './components/AddAsset'

const StyledApp = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #1C1C1E;
  color: #ffffff;
  width: 100%;
  min-height: 100vh;
`

const PageContainer = styled.div`
  margin-left:80px;
`

function App() {
  return (
    <StyledApp className="App">
      <Menu />
      <BrowserRouter>
        <PageContainer>
          <NavBar />
          <Route exact path="/" activeClassName="current" component={Dashboard} />
          <Route path="/assets" activeClassName="current" component={Assets} />
          <Route path="/assets/add" activeClassName="current" component={AddAsset} />
        </PageContainer>
      </BrowserRouter>
    </StyledApp >
  );
}

export default App;
