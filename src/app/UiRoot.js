import React from 'react';
import { Navigator } from 'react-native';
import TitleScreen from './components/TitleScreen';
import UserListScreen from './components/UsersListScreen';
import UserEditScreen from './components/UserEditScreen';
import UserCreateScreen from './components/UserCreateScreen';

const BLOCK_WELCOME = 'WELCOME';
const BLOCK_USERS_CREATE = 'BLOCK_USERS_CREATE';
const BLOCK_USERS_LIST = 'USERS_LIST';
const BLOCK_USERS_EDIT = 'USERS_EDIT';

const ROUTES = {
  BLOCK_WELCOME: {
    id: BLOCK_WELCOME,
  },
  BLOCK_USERS_LIST: {
    id: BLOCK_USERS_LIST,
  },
  BLOCK_USERS_EDIT: {
    id: BLOCK_USERS_EDIT,
  },
  BLOCK_USERS_CREATE: {
    id: BLOCK_USERS_CREATE,
  },
};

let isDebuggingInChrome = false;
try {
  isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent; // eslint-disable-line
} catch (e) {
  console.error(e);
}

function navigatePush(navigator, route) {
  if (isDebuggingInChrome) {
    navigator.replace(route);
  } else {
    navigator.push(route);
  }
}
function navigatePop(navigator, route) {
  if (isDebuggingInChrome) {
    navigator.replace(route);
  } else {
    navigator.pop();
  }
}

export default class UiRoot extends React.Component {

  static renderScene(route, navigator) {
    switch (route.id) {
      case BLOCK_USERS_CREATE:
        return (
          <UserCreateScreen
            goToList={() => navigatePop(navigator, ROUTES.BLOCK_USERS_LIST)}
          />
        );
      case BLOCK_USERS_EDIT:
        return (
          <UserEditScreen
            userId={route.itemId}
            goToList={() => navigatePop(navigator, ROUTES.BLOCK_USERS_LIST)}
          />
        );
      case BLOCK_USERS_LIST:
        return (
          <UserListScreen
            goToCreate={() => navigatePush(navigator, ROUTES.BLOCK_USERS_CREATE)}
            goToEdit={itemId => navigatePush(navigator, { id: BLOCK_USERS_EDIT, itemId })}
          />
        );

      case BLOCK_WELCOME:
      default:
        return (
          <TitleScreen
            proceed={() => navigatePush(navigator, ROUTES.BLOCK_USERS_LIST)}
          />
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={ROUTES.BLOCK_WELCOME}
        renderScene={(route, navigator) => UiRoot.renderScene(route, navigator)}
      />

    );
  }
}
