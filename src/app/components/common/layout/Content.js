import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  defaultScrollable: {
    flex: 1,
  },
  defaultNonScrollable: {},
  overlay: {
    position: 'absolute',
    top:0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    opacity: 0.5,
  }
});

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialog: null,
    }
  }

  showDialog = (dialog) => {
    this.setState({
      dialog
    });
  };

  hideDialog = () => {
    this.setState({
      dialog: null,
    });
  };

  getChildContext() {
    return {
      showDialog: this.showDialog,
      hideDialog: this.hideDialog,
    }
  }

  render() {
    const defaultStyles = this.props.isScrollable ?
      styles.defaultScrollable
      :
      styles.defaultNonScrollable;
    return (
      <View style={[defaultStyles, this.props.style]}>
        {
          this.props.isScrollable ?
            <ScrollView>
              {this.props.children}
            </ScrollView>
            :
            this.props.children
        }
        {
          this.state.dialog &&
            <View style={styles.overlay}/>
        }
        {this.state.dialog}
      </View>
    );
  }
}

Content.childContextTypes = {
  showDialog: React.PropTypes.func,
  hideDialog: React.PropTypes.func,
};

Content.propTypes = {
  children: React.PropTypes.node.isRequired,
  isScrollable: React.PropTypes.bool,
};

Content.defaultProps = {
  isScrollable: false,
};

export function withDialogAware(Component) {
  class WithDialogShow extends React.Component {
    render() {
      return (
        <Component
          {...this.props}
          showDialog={this.context.showDialog}
          hideDialog={this.context.hideDialog}
        />
      );
    }
  }
  WithDialogShow.contextTypes = {
    showDialog: React.PropTypes.func,
    hideDialog: React.PropTypes.func,
  };

  return WithDialogShow;
}
