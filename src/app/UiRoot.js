import React from 'react';
import { Navigator } from 'react-native';
import TitleScreen from './components/TitleScreen';
import UserListScreen from './components/UsersListScreen';
import UserEditScreen from './components/UserEditScreen';
import UserCreateScreen from './components/UserCreateScreen';
import PositionsListScreen from './components/PositionsListScreen';
import Menu from './components/Menu';

const BLOCK_WELCOME = 'WELCOME';
const BLOCK_USERS_CREATE = 'BLOCK_USERS_CREATE';
const BLOCK_USERS_LIST = 'USERS_LIST';
const BLOCK_USERS_EDIT = 'USERS_EDIT';
const BLOCK_POSITIONS_LIST = 'BLOCK_POSITIONS_LIST';

const ROUTES = {
  BLOCK_WELCOME: {
    id: BLOCK_WELCOME,
    depth: 0,
  },
  BLOCK_USERS_LIST: {
    id: BLOCK_USERS_LIST,
    depth: 1,
  },
  BLOCK_USERS_EDIT: {
    id: BLOCK_USERS_EDIT,
    depth: 2,
  },
  BLOCK_USERS_CREATE: {
    id: BLOCK_USERS_CREATE,
    depth: 2,
  },
  BLOCK_POSITIONS_LIST: {
    id: BLOCK_POSITIONS_LIST,
    depth: 1,
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


function getNavItems(navigator) {
  function rudeNav(ROUTE) {
    if (isDebuggingInChrome) {
      navigator.replace(ROUTE);
      return;
    }
    navigator.resetTo(ROUTE);
  }

  return [{
    text: 'Users',
    onPress: () => {
      rudeNav(ROUTES.BLOCK_USERS_LIST);
    },
  }, {
    text: 'Positions',
    onPress: () => {
      rudeNav(ROUTES.BLOCK_POSITIONS_LIST);
    },
  }];
}

export default class UiRoot extends React.Component {
  static renderScene(route, navigator) {
    switch (route.id) {
      case BLOCK_USERS_CREATE:
        return (
          <Menu menuItems={getNavItems(navigator)}>
            <UserCreateScreen
              goToList={() => navigatePop(navigator, ROUTES.BLOCK_USERS_LIST)}
            />
          </Menu>
        );
      case BLOCK_USERS_EDIT:
        return (
          <Menu menuItems={getNavItems(navigator)}>
            <UserEditScreen
              userId={route.itemId}
              goToList={() => navigatePop(navigator, ROUTES.BLOCK_USERS_LIST)}
            />
          </Menu>
        );
      case BLOCK_USERS_LIST:
        return (
          <Menu menuItems={getNavItems(navigator)}>
            <UserListScreen
              goToCreate={() => navigatePush(navigator, ROUTES.BLOCK_USERS_CREATE)}
              goToEdit={itemId => navigatePush(navigator, { id: BLOCK_USERS_EDIT, itemId })}
            />
          </Menu>
        );

      case BLOCK_POSITIONS_LIST:
        return (
          <Menu menuItems={getNavItems(navigator)}>
            <PositionsListScreen
              goToCreate={() => navigatePush(navigator, ROUTES.BLOCK_USERS_CREATE)}
              goToEdit={itemId => navigatePush(navigator, { id: BLOCK_USERS_EDIT, itemId })}
            />
          </Menu>
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
