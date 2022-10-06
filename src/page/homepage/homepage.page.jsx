import React from 'react';
import { Box, Text, Flex, Button, Link, Heading } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Flex
      textAlign="center"
      align="center"
      justify="center"
      height="80vh"
      direction="column"
      gap="10px"
    >
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: '30px', md: '40px', lg: '60px' }}
          textTransform="capitalize"
          letterSpacing="2px"
        >
          The best mobile Translator App
        </Heading>
      </Box>
      <Box>
        <Text>
          In our application, you can translate all your texts into any living
          language of the world without any problem
        </Text>
      </Box>
      <Box>
        <Link as={ReactLink} to="/info">
          <Button border="2px solid black" size="lg">
            Lets Go
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default HomePage;
