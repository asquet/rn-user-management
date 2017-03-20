import { StyleSheet } from 'react-native';
import getFormStyles from './styles/forms';
import getListStyles from './styles/lists';
import getUserListStyles from './styles/userList';
import getTitleScreenStyles from './styles/titleScreen';
import getMenuStyles from './styles/menu';

const consts = {
  backgroundColor: 'white',
};

export const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: consts.backgroundColor,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

export const formStyles = getFormStyles(consts);

export const listStyles = getListStyles(consts);

export const userList = getUserListStyles(consts);

export const titleScreenStyles = getTitleScreenStyles(consts);

export const menuStyles = getMenuStyles(consts);
