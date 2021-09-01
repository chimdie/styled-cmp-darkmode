import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled, { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme } from "./styles/theme";
import { darkTheme, lightTheme, GlobalStyle } from "./styles/globalStyle";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 10%;
  margin: auto;
  max-width: 1000px;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Level = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const ToggleBtn = styled.button`
  border: 0;
  background: transparent;
  font-size: 17px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

const Buttons = styled.div``;

const Btn = styled.button`
  height: 30px;
  width: 100px;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const toggleDark = theme === 'dark'

  const handleClick = (e) => {
    setTheme(toggleDark ? "light" : "dark")
  };
  return (
    <ThemeProvider theme={toggleDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Content className="App">
        <Level className="level">
          <div>
            <Title className="title">Lollipop and Marshmallow</Title>
          </div>

          <ToggleBtn
            className="app__dark-mode-btn icon level-right"
            onClick={handleClick}
          >
            <span aria-label="switch theme">
              {theme ? (
                <FontAwesomeIcon icon={faSun} color={"#FFA500"} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </span>
          </ToggleBtn>
        </Level>

        <div className="columns">
          <div className="column">
            <p>
              Lollipop powder powder. Cotton candy caramels chupa chups halvah
              muffin caramels apple pie topping cake. Topping chocolate bar
              pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing
              sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant
              apple pie pudding caramels wafer tart tootsie roll macaroon.
              Croissant tiramisu chocolate bar carrot cake lemon drops halvah.
            </p>
          </div>
          <div className="column">
            <p>
              Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
              tart. Muffin chupa chups pie. Brownie apple pie topping lemon
              drops marzipan toffee. Pudding macaroon icing ice cream bonbon
              cake tart. Pudding sugar plum chocolate cake cake biscuit pastry
              pastry chocolate bar tart. Lemon drops dessert gummies icing.
            </p>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Name" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Email" />
          </div>
        </div>

        <Section className="section">
          <Buttons className="buttons level-right">
            <Btn>Save</Btn>
            <Btn>Submit</Btn>
          </Buttons>
        </Section>
      </Content>
    </ThemeProvider>
  );
}

export default App;
