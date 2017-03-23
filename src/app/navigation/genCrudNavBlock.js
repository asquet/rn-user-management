import React from 'react';
import { StackNavigator } from 'react-navigation';
import MenuButton from '../components/common/content/MenuButton';

const header = ({ navigate }) => ({
  right: (
    <MenuButton
      menuOpen={() => navigate('DrawerOpen')}
    />
  ),
});

export default function ({ entityName, ListScreen, EditScreen, CreateScreen }) {
  return StackNavigator({
    List: {
      screen: ListScreen,
      navigationOptions: {
        title: `${entityName} list`,
        header,
      },
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        title: state => (`Edit ${entityName}`),
        header,
      },
    },
    Create: {
      screen: CreateScreen,
      navigationOptions: {
        title: `${entityName} create`,
        header,
      },
    },
  });
}
