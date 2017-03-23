import genCrudNavBlock from './genCrudNavBlock';
import UserListScreen from '../containers/UsersListScreen';
import UserEditScreen from '../containers/UserEditScreen';
import UserCreateScreen from '../containers/UserCreateScreen';

const UsersNavigator = genCrudNavBlock({
  entityName: 'User',
  ListScreen: UserListScreen,
  EditScreen: UserEditScreen,
  CreateScreen: UserCreateScreen,
});

export default UsersNavigator;
