import { DrawerNavigator } from 'react-navigation';
import UserNavigator from './UsersNavigator';
import RolesNavigator from './RolesNavigator';
import PositionsNavigator from './PositionsNavigator';

const EntitiesNavigator = DrawerNavigator({
  Users: {
    screen: UserNavigator,
    navigationOptions: {
      drawer: {
        label: 'Users',
      },
    },
  },
  Positions: {
    screen: PositionsNavigator,
  },
  Roles: {
    screen: RolesNavigator,
  },
}, {
  initialRouteName: 'Users',
});

export default EntitiesNavigator;
