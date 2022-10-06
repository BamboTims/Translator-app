import { Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Header = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      p="5px 0"
      borderBottom="2px solid grey"
    >
      <Heading size="lg">
        <Link to="/">Translate</Link>
      </Heading>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Header;
