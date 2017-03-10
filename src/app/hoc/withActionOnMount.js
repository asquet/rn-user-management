import React from 'react';

export default function withActionOnMount(OtherComponent, action) {
  return class extends React.Component {
    static get displayName() {
      return `withActionOnMount(${OtherComponent.displayName || OtherComponent.name || 'Component'})`;
    }

    componentWillMount() {
      action.call(this);
    }

    render() {
      return (
        <OtherComponent {...this.props} />
      );
    }

  };
};