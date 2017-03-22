import getFormStyles from './styles/forms';
import getListStyles from './styles/lists';
import getUserListStyles from './styles/userList';
import getTitleScreenStyles from './styles/titleScreen';
import getMenuStyles from './styles/menu';
import getLayoutStyles from './styles/layout';
import getCommonStyles from './styles/common';

export const consts = {
  backgroundColor: 'white',
  fontSize: 18,
  fontSizeLarge: 24,
  fontSizeHuge: 30,
  fontSizeSmall: 16,
  color: '#707070',
  colorEmphasize: '#6699CC',
  colorDim: '#888',
  borderColor: '#C0C0C0',
};

export const commonStyles = getCommonStyles(consts);

export const formStyles = getFormStyles(consts);

export const listStyles = getListStyles(consts);

export const userList = getUserListStyles(consts);

export const titleScreenStyles = getTitleScreenStyles(consts);

export const menuStyles = getMenuStyles(consts);

export const layoutStyles = getLayoutStyles(consts);
