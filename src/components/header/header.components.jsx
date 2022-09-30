import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Header = () => {
  return (
    <Box
      padding="5px"
      borderBottom="1px solid grey"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>Translate</Text>
      <ColorModeSwitcher />
    </Box>
  );
};

export default Header;
