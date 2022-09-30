import React from 'react';
import {
  Box,
  Text,
  Flex,
  Button,
  Link,
  Heading,
  Highlight,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Flex
      align="center"
      justify="center"
      height="60vh"
      direction="column"
      gap="10px"
    >
      <Box>
        <Heading
          as="h1"
          fontSize="6xl"
          textTransform="capitalize"
          letterSpacing="2px"
        >
          The best mobile Translator App
        </Heading>
      </Box>
      <Box>
        <Text>
          In our application, you can translate<Highlight>all your texts into any living language </Highlight> of the
          world without any problem
        </Text>
      </Box>
      <Box>
        <Link as={ReactLink} to="/loading">
          <Button border="2px solid black" padding="20px 40px">
            Get App
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default HomePage;
