import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.components';
import HomePage from './page/homepage/homepage.page';
import InfoPage from './page/info/info.page';
import TranslatePage from './page/translate/translate.page';

class App extends Component {
  state = {
    languages: {},
  };

  componentDidMount() {
    this.getLanguages();
  }

  getLanguages = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'cf041ec36emsh7ea1ee7d0932ebbp18802ajsn5dbf3d50a9b2',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
        },
      };

      const response = await fetch(
        'https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0',
        options
      );
      const languages = await response.json();
      this.setState({ languages });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Router>
        <Box p="10px 20px">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route
              path="/translate"
              element={<TranslatePage languages={this.state.languages} />}
            />
          </Routes>
        </Box>
      </Router>
    );
  }
}

export default App;
