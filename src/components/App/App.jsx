import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: Roboto;
  }
`

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 128px;
`;

const Name = styled.h1`
  font-size: 64px;
  width: 100%;
  margin: 0;
  color: red;
`;

const Muted = styled.p`
  color: #9e9e9e;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <TextBlock>
          I'm
          <Name>Loutchansky Oleg</Name>
          Software engineer
          <Muted>Site in development</Muted>
        </TextBlock>
      </Root>
    );
  }
}

export default App;
