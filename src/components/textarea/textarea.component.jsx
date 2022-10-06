import React from 'react';
import { Text, Textarea } from '@chakra-ui/react';

const TextArea = props => {
  const { text, handleChange } = props;
  return (
    <>
      <Text mb="8px">{text}</Text>
      <Textarea
        onChange={handleChange}
        placeholder="Here is a sample placeholder"
        h={150}
        w={{ base: '100%', md: '100%', lg: '250px' }}
        display="inline-block"
      />
    </>
  );
};

export default TextArea;
