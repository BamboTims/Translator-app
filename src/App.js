import { Box } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.components';
import HomePage from './page/homepage/homepage.components';

function App() {
  return (
    <Router>
      <Box p="10px 20px">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
