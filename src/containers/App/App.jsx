import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import backgroundImageUrl from "./background.jpg";
import backgroundImageUrl90 from "./background-90.jpg";
import backgroundImageUrl80 from "./background-80.jpg";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Roboto;
  }
`;

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
  background-image: url("${backgroundImageUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1366px) {
    background-image: url("${backgroundImageUrl90}");
  }

  @media screen and (max-width: 768px) {
    background-image: url("${backgroundImageUrl80}");
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 128px;
  color: white;
  z-index: 1;

  @media screen and (max-width: 767px) {
    margin: 8px;
  }
`;

const Name = styled.h1`
  font-size: 64px;
  width: 100%;
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  margin: 4px;
  font-weight: 200;
  font-size: 24px;
  background: #ff47bb; /* Old Browsers */
  background: -webkit-linear-gradient(left, #ff47bb, #c347ff); /*Safari 5.1-6*/
  background: -o-linear-gradient(left, #ff47bb, #c347ff); /*Opera 11.1-12*/
  background: -moz-linear-gradient(left, #ff47bb, #c347ff); /*Fx 3.6-15*/
  background: linear-gradient(to right, #ff47bb, #c347ff); /*Standard*/
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

const DescriptionLink = styled.a``;

const Copyright = styled.p`
  position: absolute;
  right: 32px;
  bottom: 32px;
  color: white;
  margin: 0;

  @media screen and (max-width: 767px) {
    right: 8px;
    bottom: 8px;
  }
`;

const VtbLink = () => (
  <DescriptionLink href="https://vtb.ru" target="_blank" rel="noopener">
    vtb.ru
  </DescriptionLink>
);

const Links = styled.div`
  color: white;
  position: absolute;
  bottom: 32px;
  left: 32px;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    bottom: 8px;
    left: 8px;
  }
`;

const SocietyLinkTag = styled.a`
  color: white;
  margin-bottom: 6px;

  :last-child {
    margin-bottom: 0;
  }

  :visited {
    color: white;
  }
`;

const BackgroundShadow = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;

  @media screen and (max-width: 767px) {
    background-color: rgba(0, 0, 0, 0.66);
  }
`;

const SocietyLink = ({ href, children }) => (
  <SocietyLinkTag href={href} target="_blank" rel="noopener">
    {children}
  </SocietyLinkTag>
);

export class App extends Component {
  render() {
    return (
      <Root>
        <GlobalStyles />
        <BackgroundShadow />
        <TextBlock>
          Hi, I'm @luchanso
          <Name>Loutchansky Oleg</Name>
          <Description>
            Software engineer at <VtbLink />
          </Description>
        </TextBlock>
        <Copyright>Mandelbrot by Daniel White</Copyright>
        <Links>
          <SocietyLink href="https://fb.com/oleg.loutchansky">
            <i className="fab fa-facebook-f" />
          </SocietyLink>
          <SocietyLink href="https://vk.com/loutchansky">
            <i className="fab fa-vk" />
          </SocietyLink>
          <SocietyLink href="https://www.instagram.com/luchanso/">
            <i className="fab fa-instagram" />
          </SocietyLink>
          <SocietyLink href="https://github.com/luchanso/">
            <i className="fab fa-github" />
          </SocietyLink>
          <SocietyLink href="https://telegram.me/luchanso">
            <i className="fab fa-telegram" />
          </SocietyLink>
        </Links>
      </Root>
    );
  }
}
