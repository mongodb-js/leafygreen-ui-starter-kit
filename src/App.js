/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

const Title = styled.h1`
  font-weight: bold;
  color: green;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding: 0;

    li + li {
      margin-left: 10px;
    }
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <header
          css={css`
            text-align: center;
          `}
        >
          <Title>@leafygreen-ui starter-kit!</Title>
        </header>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </Nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
