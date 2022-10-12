import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

// const AlertPop = props => {
//   const { error } = props;
//   return (
//     <Alert status="error">
//       <AlertIcon />
//       <AlertTitle>Error !</AlertTitle>
//       <AlertDescription>{error}</AlertDescription>
//     </Alert>
//   );
// };

const AlertPop = props => {
  const { error } = props;
  const toast = useToast();
  return toast({
    title: 'Info !',
    description: error,
    status: 'info',
    duration: 3000,
    isClosable: true,
  });
};

export default AlertPop;
