import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import './App.css';
import FormBuilder from "./components/formBuilder/formbuilder";
import getFormData from "./data/formConfig";
import { themeData } from "./data/themeConfig";
import Theme from "./components/theme/theme";
import { DEFAULT_THEME } from "./utils/constant";

const data = getFormData()

const AppWrapper = styled.div`
  display: grid;
`;

const Heading = styled.h1`
  text-align: center;
`

function App() {

  const [theme, setTheme] = useState(DEFAULT_THEME);

  const updateTheme = (value) => {
    setTheme(value);
  }

  return (
    <ThemeProvider theme={themeData[theme]}>
      <Heading>Register for Meeting</Heading>
      <AppWrapper>
        <Theme theme={theme} updateTheme={updateTheme} />
        <FormBuilder data={data} />
      </AppWrapper>
    </ThemeProvider >
  );
}

export default App;
