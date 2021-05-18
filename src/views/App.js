import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import AppProvider, { AppContext } from '../AppContext';
import Layout from 'components/Layout';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'assets/Theme';

const StyledDiv = styled.div`
  color: var(--black);
  ${({ theme }) => theme.media.lgAbove} {
    color: red;
  }
`;

const Button = () => {
  const { toogleIsActive, isActive } = useContext(AppContext);
  return (
    <button type="button" onClick={toogleIsActive}>
      {isActive ? 'True' : 'False'}
    </button>
  );
};

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <StyledDiv>aaa</StyledDiv>
          <Button />
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
