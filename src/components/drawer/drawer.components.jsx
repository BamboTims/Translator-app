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
  Box,
  List,
  ListItem,
  Button,
} from '@chakra-ui/react';
import React, { Component } from 'react';
import { ReactComponent as Search } from '../../assets/search-svgrepo-com.svg';

class LangDrawer extends Component {
  state = {
    userInput: '',
  };

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    const { isOpen, onClose, languages, changeLanguage } = this.props;
    const languageValues = Object.values(languages).filter(el =>
      el.name.startsWith(
        this.state.userInput
          ? this.state.userInput[0].toUpperCase() +
              this.state.userInput.substring(1)
          : ''
      )
    );
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
                <Input
                  value={this.state.userInput}
                  onChange={this.handleChange}
                  variant="flushed"
                  placeholder="Type here..."
                />
              </InputGroup>
              <Box>
                <Text margin="10px 0">All languages</Text>
                <Box height="40vh">
                  <List spacing={3}>
                    {languageValues.map(el => (
                      <ListItem
                        key={el.code}
                        cursor="pointer"
                        borderRadius={5}
                        p={3}
                      >
                        <Button
                          onClick={() => {
                            changeLanguage(el);
                            onClose();
                          }}
                          w="100%"
                        >
                          {el.name}
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </DrawerBody>

            <DrawerFooter textAlign="center">
              <Text>
                {this.state.userInput
                  ? `There are ${languageValues.length} languages starting with the letter ${this.state.userInput}`
                  : `There are ${languageValues.length} languages available`}
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
}

export default LangDrawer;
