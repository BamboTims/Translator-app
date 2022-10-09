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
    isLanguageTo: false,
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  toggleDrawer = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  changeLanguageFrom = lang => {
    this.setState({ from: lang });
  };
  changeLanguageTo = lang => {
    this.setState({ to: lang });
  };

  switchLanguages = () => {
    const temp = this.state.to;
    this.setState({ to: this.state.from, from: temp });
  };

  render() {
    const { languages } = this.props;
    const changeLanguage = this.state.isLanguageTo
      ? this.changeLanguageTo
      : this.changeLanguageFrom;
    const languageTo = this.state.to?.name;
    const languageFrom = this.state.from?.name;

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
            <Button
              size="lg"
              onClick={() => {
                this.toggleDrawer();
                this.setState({ isLanguageTo: false });
              }}
            >
              <Text>{languageFrom || 'Choose'}</Text>
            </Button>
          </Box>

          <Button
            colorScheme="black"
            variant="ghost"
            size="lg"
            onClick={this.switchLanguages}
          >
            <Icon as={Shufle} />
          </Button>

          <Box>
            <Button
              size="lg"
              onClick={() => {
                this.toggleDrawer();
                this.setState({ isLanguageTo: true });
              }}
            >
              <Text>{languageTo || 'Choose'}</Text>
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
              text={`Translate from : ${languageFrom || ''}`}
            />
          </Flex>
          <Flex direction="column">
            <TextArea text={`Translate to : ${languageFrom || ''}`} />
          </Flex>
        </Flex>
        <LangDrawer
          isOpen={this.state.isOpen}
          onClose={this.toggleDrawer}
          languages={languages}
          changeLanguage={changeLanguage}
        />
      </Flex>
    );
  }
}

export default TranslatePage;
