import React from 'react';
import { StackNavigator } from 'react-navigation';
import MenuButton from '../components/common/content/MenuButton';


export default function ({ entityName, ListScreen, EditScreen, CreateScreen }) {
  return StackNavigator({
    List: {
      screen: ListScreen,
      navigationOptions: {
        title: `${entityName} list`,
        headerRight: ({ navigate }) => (
          <MenuButton
            menuOpen={() => navigate('DrawerOpen')}
          />
        ),
      },
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        title: `Edit ${entityName}`,
      },
    },
    Create: {
      screen: CreateScreen,
      navigationOptions: {
        title: `${entityName} create`,
      },
    },
  });
}
