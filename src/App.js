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

const Columns = styled.div``;

const Column = styled.div`
  padding: 1rem 0;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

const Input = styled.input`
  width: 100%;
`;
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = theme === "dark";

  const handleClick = (e) => setTheme(toggleTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={toggleTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Content>
        <Level>
          <div>
            <Title>Lollipop and Marshmallow</Title>
          </div>

          <ToggleBtn onClick={handleClick}>
            <span aria-label="switch theme">
              {toggleTheme ? (
                <FontAwesomeIcon icon={faSun} color={"#FFA500"} />
              ) : (
                <FontAwesomeIcon icon={faMoon} color={"#FFA500"} />
              )}
            </span>
          </ToggleBtn>
        </Level>

        <Columns>
          <Column>
            <p>
              Lollipop powder powder. Cotton candy caramels chupa chups halvah
              muffin caramels apple pie topping cake. Topping chocolate bar
              pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing
              sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant
              apple pie pudding caramels wafer tart tootsie roll macaroon.
              Croissant tiramisu chocolate bar carrot cake lemon drops halvah.
            </p>
          </Column>
          <Column>
            <p>
              Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
              tart. Muffin chupa chups pie. Brownie apple pie topping lemon
              drops marzipan toffee. Pudding macaroon icing ice cream bonbon
              cake tart. Pudding sugar plum chocolate cake cake biscuit pastry
              pastry chocolate bar tart. Lemon drops dessert gummies icing.
            </p>
          </Column>
        </Columns>

        <Field>
          <div className="control">
            <Input type="text" placeholder="Name" />
          </div>
        </Field>

        <Field>
          <div className="control">
            <Input type="text" placeholder="Email" />
          </div>
        </Field>

        <Section>
          <Buttons>
            <Btn>Save</Btn>
            <Btn>Submit</Btn>
          </Buttons>
        </Section>
      </Content>
    </ThemeProvider>
  );
}

export default App;
