import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const AlertPop = props => {
  const { error } = props;
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error !</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};

export default AlertPop;
