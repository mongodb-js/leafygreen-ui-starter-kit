/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled/macro';

import './App.css';

const Title = styled.h1`
  font-weight: bold;
  color: green;
`;

function App() {
  return (
    <div className="App">
      <header
        css={css`
          text-align: center;
        `}
      >
        <Title>@leafygreen-ui starter-kit!</Title>
      </header>
      <div css={{ width: '400px', margin: '0 auto' }}>
        So many components to play with!
      </div>
    </div>
  );
}

export default App;
