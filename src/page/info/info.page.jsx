import React from 'react';
import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const InfoPage = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      gap={5}
      height="80vh"
      textAlign="center"
    >
      <Box>
        <Image
          alt="true"
          src="https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/l_watermark_mnkze9/o_30/c_scale,w_181/fl_layer_apply,x_0,y_133/v1/icons/illustrations-multicolor/map-navigation/place-maps/globe-m0pnukj1optxaqb6vnc1.png?_a=AJAH1WI0"
        />
      </Box>
      <Box>
        <Heading as="h4" size="md">
          Translation of languages across the world
        </Heading>
      </Box>
      <Box>
        <Text>
          In our application, you can translate all your texts into any living
          language of the world without any problem
        </Text>
      </Box>
      <Box>
        <Link as={ReactLink} to="/translate">
          <Button border="2px solid black" size="lg" marginTop="10px">
            Get App
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default InfoPage;
