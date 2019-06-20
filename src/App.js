/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import styled from '@emotion/styled/macro';
import { uiColors } from '@leafygreen-ui/palette'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

const globalStyles = css`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Akzidenz", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${uiColors.black};
    background-color: ${uiColors.gray.light3};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const Header = styled.header`
  background-color: ${uiColors.white};
  border-bottom: 1px solid ${uiColors.gray.light2};
  overflow: hidden;
`;

const Title = styled.h1`
  font-weight: bold;
  color: ${uiColors.green.base};
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const ListItem = styled.li`
  & + & {
    margin-left: 24px;
  }
`;

const Navigation = styled.nav`
  margin-top: 36px;
`;

const Container = styled.section`
  width: 100%;
  max-width: 850px;
  padding-left: 12px;
  padding-right: 12px;
  margin: auto;
`;

const navigationLinkStyles = css`
  transition: color 0.5s ease-out;
  color: ${uiColors.gray.dark1};
  text-decoration: none;

  &:hover {
    color: ${uiColors.green.base};
  }

  &.active {
    color: ${uiColors.green.base};
    border-bottom: 2px solid currentColor;
  }
`;

const NavigationLink = (props) => <NavLink {...props} css={navigationLinkStyles} />;

function App() {
  return (
    <Router>
      <div className="App">
        <Global styles={globalStyles} />

        <Header>
          <Container>
            <Title>@leafygreen-ui starter-kit!</Title>

            <Navigation>
              <List>
                <ListItem>
                  <NavigationLink exact to="/">Home</NavigationLink>
                </ListItem>
                <ListItem>
                  <NavigationLink exact to="/about">About</NavigationLink>
                </ListItem>
              </List>
            </Navigation>
          </Container>
        </Header>

        <Container css={css`margin-top: 48px;`}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
