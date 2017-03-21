import React, { Component } from 'react';

const withContext = ({ context, contextType }) => (WrappedComponent) => {
  class WithContext extends Component {
    getChildContext() {
      return context;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithContext.WrappedComponent = WrappedComponent;
  WithContext.childContextTypes = contextType;

  return WithContext;
};

export default withContext;
