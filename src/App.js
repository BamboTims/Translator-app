import languages from './languages/languages';
import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '/components/ErrorBoundary/errorboundary.component';
import Header from './components/header/header.components';
import HomePage from './page/homepage/homepage.page';
import InfoPage from './page/info/info.page';
import TranslatePage from './page/translate/translate.page';

class App extends Component {
  state = {
    languages: Object.entries(languages).map(([key, values]) => ({
      code: key,
      ...values,
    })),
  };

  render() {
    return (
      <Router>
        <Box p="10px 20px">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <ErrorBoundary>
              <Route
                path="/translate"
                element={<TranslatePage languages={this.state.languages} />}
              />
            </ErrorBoundary>
          </Routes>
        </Box>
      </Router>
    );
  }
}

export default App;
