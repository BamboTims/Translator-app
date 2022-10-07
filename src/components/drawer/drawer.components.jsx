import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  InputLeftAddon,
  InputGroup,
  Icon,
  Text,
} from '@chakra-ui/react';
import { ReactComponent as Search } from '../../assets/search-svgrepo-com.svg';

const LangDrawer = props => {
  const { isOpen, onClose, languages } = props;
  return (
    <>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <InputGroup size="sm">
              <InputLeftAddon
                backgroundColor="transparent"
                border="0"
                children={<Icon as={Search} />}
              />
              <Input variant="flushed" placeholder="Type here..." />
            </InputGroup>
          </DrawerBody>

          <DrawerFooter textAlign="center">
            <Text>There are {Object.keys(languages).length} languages</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LangDrawer;
