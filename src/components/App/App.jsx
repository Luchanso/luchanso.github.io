import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: black;
    font-family: Roboto;
  }
`

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
  color: yellow;
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
`;

const Description = styled.p`
  margin: 0;
  min-height: 22px;
`;

const MASK = '█▓▒░█▓▒░█▓▒░<>/';
const ANIMATION_TIME = 1200;

const getRandomMaskSymbol = () => {
  const number = Math.floor(Math.random() * MASK.length);
  return MASK[number];
}

class App extends Component {
  state = {
    resultDescription: 'Site in development...',
    description: MASK[0].repeat(16)
  };

  componentDidMount() {
    const animationStart = Date.now();

    this.interval = setInterval(() => {
      let newDescription = '';

      for (let i = 0; i < 10 + Math.random() * 10; i++) {
        newDescription += getRandomMaskSymbol();
      }

      if (animationStart < Date.now() - ANIMATION_TIME) {
        clearInterval(this.interval);
        this.setState({
          description: this.state.resultDescription
        });
        return;
      }

      this.setState({
        description: newDescription
      });
    }, 1000 / 30);
  }

  render() {
    return (
      <Root>
        <TextBlock>
          <Name>Loutchansky Oleg</Name>
          <Description>{this.state.description}</Description>
        </TextBlock>
      </Root>
    );
  }
}

export default App;
