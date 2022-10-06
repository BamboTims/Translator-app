import React, { Component } from 'react';
import { Flex, Box, Text, Button, Icon } from '@chakra-ui/react';
import { ReactComponent as Shufle } from '../../assets/shuffle-svgrepo-com.svg';
import TextArea from '../../components/textarea/textarea.component';
import LangDrawer from '../../components/drawer/drawer.components';

class TranslatePage extends Component {
  state = {
    from: '',
    to: '',
    text: '',
    isOpen: false,
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  toggleDrawer = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { languages } = this.props;
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="80vh"
        gap={5}
      >
        <Flex
          align="center"
          justify="space-evenly"
          w={{ base: '100%', md: '100%', lg: '50%' }}
        >
          <Box>
            <Button size="lg" onClick={this.toggleDrawer}>
              <Text>Germany</Text>
            </Button>
          </Box>

          <Button colorScheme="black" variant="ghost" size="lg">
            <Icon as={Shufle} />
          </Button>

          <Box>
            <Button size="lg" onClick={this.toggleDrawer}>
              <Text>French</Text>
            </Button>
          </Box>
        </Flex>
        <Flex
          justify="space-between"
          gap={5}
          w={{ base: '100%', md: '100%', lg: '60%' }}
          direction={{ base: 'column', md: 'column', lg: 'row' }}
        >
          <Flex direction="column">
            <TextArea
              handleChange={this.handleChange}
              value={this.state.text}
              text="Translate From"
            />
          </Flex>
          <Flex direction="column">
            <TextArea value={this.state.to} text="Translate To" />
          </Flex>
        </Flex>
        <LangDrawer
          isOpen={this.state.isOpen}
          onClose={this.toggleDrawer}
          languages={languages}
        />
      </Flex>
    );
  }
}

export default TranslatePage;
