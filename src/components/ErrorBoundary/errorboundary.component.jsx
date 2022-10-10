import React, { Component } from 'react';
import AlertPop from '../alert/alert.component';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true, errorMessage: error };
  }

  render() {
    const { children } = this.props;

    if (this.state.hasError) {
      return <AlertPop error={this.state.errorMessage} />;
    }

    return children;
  }
}

export default ErrorBoundary;
