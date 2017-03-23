import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { TouchableOpacity, View } from 'react-native';
import { menuStyles } from '../../../stylesheet';

function MenuButton({ styles, menuOpen }) {
  return (
    <TouchableOpacity onPress={menuOpen} style={[menuStyles.menuButton, styles]}>
      <Icon name="navicon" size={24} />
    </TouchableOpacity>
  );
}

MenuButton.propTypes = {
  styles: View.propTypes.style,
  menuOpen: React.PropTypes.func.isRequired,
};
MenuButton.defaultProps = {
  styles: null,
};

export default MenuButton;
