import React from 'react';
import { Navigator } from 'react-native';
import TitleScreen from './containers/TitleScreen';
import UserListScreen from './containers/UsersListScreen';
import UserEditScreen from './containers/UserEditScreen';
import UserCreateScreen from './containers/UserCreateScreen';
import PositionsListScreen from './containers/PositionsListScreen';
import PositionEditScreen from './containers/PositionEditScreen';
import PositionCreateScreen from './containers/PositionCreateScreen';
import RolesListScreen from './containers/RolesListScreen';
import RoleEditScreen from './containers/RoleEditScreen';
import RoleCreateScreen from './containers/RoleCreateScreen';
import Menu from './components/Menu';

const BLOCK_WELCOME = 'WELCOME';
const BLOCK_USERS_CREATE = 'BLOCK_USERS_CREATE';
const BLOCK_USERS_LIST = 'USERS_LIST';
const BLOCK_USERS_EDIT = 'USERS_EDIT';
const BLOCK_POSITIONS_LIST = 'BLOCK_POSITIONS_LIST';
const BLOCK_POSITIONS_CREATE = 'BLOCK_POSITIONS_CREATE';
const BLOCK_POSITIONS_EDIT = 'BLOCK_POSITIONS_EDIT';
const BLOCK_ROLES_LIST = 'BLOCK_ROLES_LIST';
const BLOCK_ROLES_EDIT = 'BLOCK_ROLES_EDIT';
const BLOCK_ROLES_CREATE = 'BLOCK_ROLES_CREATE';

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
  BLOCK_POSITIONS_LIST: {
    id: BLOCK_POSITIONS_LIST,
  },
  BLOCK_POSITIONS_EDIT: {
    id: BLOCK_POSITIONS_EDIT,
  },
  BLOCK_POSITIONS_CREATE: {
    id: BLOCK_POSITIONS_CREATE,
  },
  BLOCK_ROLES_LIST: {
    id: BLOCK_ROLES_LIST,
  },
  BLOCK_ROLES_EDIT: {
    id: BLOCK_ROLES_EDIT,
  },
  BLOCK_ROLES_CREATE: {
    id: BLOCK_ROLES_CREATE,
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
  }, {
    text: 'Roles',
    onPress: () => {
      rudeNav(ROUTES.BLOCK_ROLES_LIST);
    },
  }];
}

export default class UiRoot extends React.Component {
  renderScene(route, navigator) {
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

      case BLOCK_POSITIONS_LIST:
        return (
          <PositionsListScreen
            goToCreate={() => navigatePush(navigator, ROUTES.BLOCK_POSITIONS_CREATE)}
            goToEdit={itemId => navigatePush(navigator, { id: BLOCK_POSITIONS_EDIT, itemId })}
          />
        );

      case BLOCK_POSITIONS_EDIT:
        return (
          <PositionEditScreen
            positionId={route.itemId}
            goToList={() => navigatePop(navigator, ROUTES.BLOCK_POSITIONS_LIST)}
          />
        );

      case BLOCK_POSITIONS_CREATE:
        return (
          <PositionCreateScreen
            goToList={() => navigatePop(navigator, ROUTES.BLOCK_POSITIONS_LIST)}
          />
        );

      case BLOCK_ROLES_LIST:
        return (
          <RolesListScreen
            goToCreate={() => navigatePush(navigator, ROUTES.BLOCK_ROLES_CREATE)}
            goToEdit={itemId => navigatePush(navigator, { id: BLOCK_ROLES_EDIT, itemId })}
          />
        );

      case BLOCK_ROLES_EDIT:
        return (
          <RoleEditScreen
            roleId={route.itemId}
            goToList={() => navigatePop(navigator, ROUTES.BLOCK_ROLES_LIST)}
          />
        );

      case BLOCK_ROLES_CREATE:
        return (
          <RoleCreateScreen
            goToList={() => navigatePop(navigator, ROUTES.BLOCK_ROLES_LIST)}
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

  renderSceneWithMenu(route, navigator) {
    return (
      <Menu menuItems={getNavItems(navigator)}>
        {this.renderScene(route, navigator)}
      </Menu>
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={ROUTES.BLOCK_WELCOME}
        renderScene={(route, navigator) => this.renderSceneWithMenu(route, navigator)}
      />
    );
  }
}
