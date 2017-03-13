import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

export default class Menu extends React.Component {

  static get childContextTypes() {
    return {
      menuOpen: React.PropTypes.func,
      menuClose: React.PropTypes.func,
    };
  }

  constructor(props) {
    super(props);

    this.drawerRef = null;
  }

  getChildContext() {
    return {
      menuOpen: this.openMenu.bind(this),
      menuClose: this.closeMenu.bind(this),
    };
  }

  closeMenu() {
    this.drawerRef.close();
  }

  openMenu() {
    this.drawerRef.open();
  }

  render() {
    const {
      menuItems,
      children,
    } = this.props;
    return (
      <Drawer
        captureGestures
        ref={(ref) => {
          this.drawerRef = ref;
        }}
        content={
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Menu</Text>
            <View>
              {
                menuItems.map(item => (
                  <TouchableOpacity onPress={item.onPress} key={item.text}>
                    <Text>{item.text}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          </View>
        }
      >
        {children}
      </Drawer>
    );
  }

}

Menu.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
  })).isRequired,
  children: React.PropTypes.node.isRequired,
};

Menu.withMenuAwareness = function genWithMenuAwareness(Cmp) {
  class withMenuAwareness extends React.Component {
    render() {
      return (
        <Cmp {...this.props} menuOpen={this.context.menuOpen} menuClose={this.context.menuClose} />
      );
    }
  }

  withMenuAwareness.contextTypes = {
    menuOpen: React.PropTypes.func.isRequired,
    menuClose: React.PropTypes.func.isRequired,
  };

  return withMenuAwareness;
};
